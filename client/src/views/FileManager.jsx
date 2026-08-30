import React, { useMemo, useState, useSyncExternalStore } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { RiAddFill, RiFolder3Fill, RiFolderAddLine, RiSearchLine } from 'react-icons/ri';
import { Button } from '../components/ui/Button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../components/ui/Pagination';
import CreateFolderModal from '../components/file-manager/CreateFolderModal';
import FileGridView from '../components/file-manager/FileGridView';
import FileListView from '../components/file-manager/FileListView';
import FileManagerStats from '../components/file-manager/FileManagerStats';
import FileManagerToolbar from '../components/file-manager/FileManagerToolbar';
import FileSearchBar from '../components/file-manager/FileSearchBar';
import MoveCopyModal from '../components/file-manager/MoveCopyModal';
import QuickFoldersSection from '../components/file-manager/QuickFoldersSection';
import {
  MAX_RECENT_FOLDERS,
  RECENT_FOLDERS_EVENT,
  RECENT_FOLDERS_KEY,
  filesByLocation,
  getFileManagerStats,
  getRecentFoldersSnapshot,
  getServerRecentFoldersSnapshot,
  initialFolders,
  subscribeToRecentFolders,
} from '../components/file-manager/fileManagerData';

const FileManager = () => {
  const router = useRouter();
  const [folders, setFolders] = useState(initialFolders);
  const [currentFolder, setCurrentFolder] = useState(null);
  const [view, setView] = useState('grid');
  const [sortBy, setSortBy] = useState('name-asc');
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [page, setPage] = useState(1);
  const [refreshTick, setRefreshTick] = useState(0);
  const [moveCopyTarget, setMoveCopyTarget] = useState(null);
  const [publicOnly, setPublicOnly] = useState(false);
  const [selectedIds, setSelectedIds] = useState(() => new Set());
  const [bulkMoveDestination, setBulkMoveDestination] = useState('');

  const forceRefresh = () => setRefreshTick((tick) => tick + 1);

  const recentFoldersRaw = useSyncExternalStore(subscribeToRecentFolders, getRecentFoldersSnapshot, getServerRecentFoldersSnapshot);
  const recentFolderIds = useMemo(() => JSON.parse(recentFoldersRaw), [recentFoldersRaw]);

  const currentFolderData = folders.find((folder) => folder.id === currentFolder);
  const quickFolders = recentFolderIds
    .map((id) => folders.find((folder) => folder.id === id))
    .filter(Boolean);

  // refreshTick forces stats/items to recompute after direct mutations to the shared `filesByLocation` object.
  const stats = useMemo(() => getFileManagerStats(folders), [folders, refreshTick]); // eslint-disable-line react-hooks/exhaustive-deps

  const allItems = useMemo(() => {
    const visibleFolders = currentFolder ? [] : folders;
    const visibleFiles = filesByLocation[currentFolder || 'root'] || [];
    const combined = [
      ...visibleFolders.map((folder) => ({ ...folder, kind: 'folder', size: `${filesByLocation[folder.id]?.length || 0} files`, bytes: 0, timestamp: 0 })),
      ...visibleFiles.map((file) => ({ ...file, kind: 'file' })),
    ];

    return combined.sort((a, b) => {
      if (a.kind !== b.kind) return a.kind === 'folder' ? -1 : 1;
      const direction = sortBy.endsWith('desc') ? -1 : 1;
      if (sortBy.startsWith('size')) return (a.bytes - b.bytes) * direction;
      if (sortBy.startsWith('date')) return (a.timestamp - b.timestamp) * direction;
      return a.name.localeCompare(b.name) * direction;
    });
  }, [currentFolder, folders, sortBy, refreshTick]); // eslint-disable-line react-hooks/exhaustive-deps

  const filteredItems = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return allItems
      .filter((item) => !query || item.name.toLowerCase().includes(query))
      .filter((item) => !publicOnly || item.kind === 'folder' || item.published);
  }, [allItems, searchTerm, publicOnly]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / itemsPerPage));
  const safePage = Math.min(page, totalPages);
  const pagedItems = filteredItems.slice((safePage - 1) * itemsPerPage, safePage * itemsPerPage);

  const itemKey = (item) => `${item.kind}-${item.id}`;
  const isSelected = (item) => selectedIds.has(itemKey(item));
  const allPagedSelected = pagedItems.length > 0 && pagedItems.every((item) => isSelected(item));
  const selectedItems = filteredItems.filter((item) => isSelected(item));

  const openFolder = (folderId) => {
    setCurrentFolder(folderId);
    setSearchTerm('');
    setPage(1);
    const current = JSON.parse(window.localStorage.getItem(RECENT_FOLDERS_KEY) || '[]');
    const next = [folderId, ...current.filter((id) => id !== folderId)].slice(0, MAX_RECENT_FOLDERS);
    window.localStorage.setItem(RECENT_FOLDERS_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(RECENT_FOLDERS_EVENT));
  };

  const goToRoot = () => {
    setCurrentFolder(null);
    setSearchTerm('');
    setPage(1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const handleItemsPerPageChange = (size) => {
    setItemsPerPage(size);
    setPage(1);
  };

  const toggleSelect = (item) => {
    setSelectedIds((current) => {
      const next = new Set(current);
      const key = itemKey(item);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const toggleSelectAll = () => {
    setSelectedIds((current) => {
      if (allPagedSelected) {
        const next = new Set(current);
        pagedItems.forEach((item) => next.delete(itemKey(item)));
        return next;
      }
      const next = new Set(current);
      pagedItems.forEach((item) => next.add(itemKey(item)));
      return next;
    });
  };

  const clearSelection = () => setSelectedIds(new Set());

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    setView('list');
  };

  const toggleSort = (field) => {
    setSortBy((current) => {
      const [currentField, currentDirection] = current.split('-');
      if (currentField === field) {
        return `${field}-${currentDirection === 'asc' ? 'desc' : 'asc'}`;
      }
      return `${field}-asc`;
    });
  };

  const createFolder = (event) => {
    event.preventDefault();
    const trimmedName = newFolderName.trim();
    if (!trimmedName) return;

    const id = `${trimmedName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now()}`;
    setFolders((current) => [{ id, name: trimmedName, updated: 'Just now' }, ...current]);
    filesByLocation[id] = [];
    setNewFolderName('');
    setIsCreateOpen(false);
  };

  const deleteItem = (item) => {
    if (item.kind === 'folder') {
      setFolders((current) => current.filter((folder) => folder.id !== item.id));
      delete filesByLocation[item.id];
    } else {
      const locationKey = currentFolder || 'root';
      filesByLocation[locationKey] = (filesByLocation[locationKey] || []).filter((file) => file.id !== item.id);
    }
    forceRefresh();
  };

  const copyLink = (item) => {
    const link = `https://gainfile.com/s/${item.kind}-${item.id}`;
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(link).catch(() => {});
    }
  };

  const togglePublish = (item) => {
    const locationKey = currentFolder || 'root';
    filesByLocation[locationKey] = (filesByLocation[locationKey] || []).map((file) =>
      file.id === item.id ? { ...file, published: !file.published } : file
    );
    forceRefresh();
  };

  const setFileAccess = (item, access) => {
    const locationKey = currentFolder || 'root';
    filesByLocation[locationKey] = (filesByLocation[locationKey] || []).map((file) =>
      (file.id === item.id ? { ...file, access } : file)
    );
    forceRefresh();
  };

  const relocateFile = (item, sourceFolderKey, destinationId, { copy = false } = {}) => {
    const { kind, ...fileData } = item;
    const sourceKey = sourceFolderKey || 'root';
    const destKey = destinationId || 'root';

    if (!copy) {
      filesByLocation[sourceKey] = (filesByLocation[sourceKey] || []).filter((file) => file.id !== item.id);
      filesByLocation[destKey] = [...(filesByLocation[destKey] || []), fileData];
    } else {
      filesByLocation[destKey] = [...(filesByLocation[destKey] || []), { ...fileData, id: Date.now() + Math.random(), updated: 'Just now' }];
    }
  };

  const openMoveModal = (item) => setMoveCopyTarget({ item, mode: 'move', currentFolder });
  const openCopyModal = (item) => setMoveCopyTarget({ item, mode: 'copy', currentFolder });

  const handleSelectDestination = (destinationId) => {
    if (!moveCopyTarget) return;
    const { item, mode, currentFolder: sourceFolder } = moveCopyTarget;
    relocateFile(item, sourceFolder, destinationId, { copy: mode === 'copy' });
    setMoveCopyTarget(null);
    forceRefresh();
  };

  const handleBulkMove = () => {
    selectedItems
      .filter((item) => item.kind === 'file')
      .forEach((item) => relocateFile(item, currentFolder, bulkMoveDestination));
    clearSelection();
    forceRefresh();
  };

  const handleBulkDelete = () => {
    selectedItems.forEach((item) => deleteItem(item));
    clearSelection();
  };

  const handleBulkPublish = (published) => {
    selectedItems
      .filter((item) => item.kind === 'file' && item.published !== published)
      .forEach((item) => togglePublish(item));
    clearSelection();
  };

  const handleBulkSetAccess = (access) => {
    selectedItems
      .filter((item) => item.kind === 'file')
      .forEach((item) => setFileAccess(item, access));
    clearSelection();
  };

  const handleBulkGetLinks = () => {
    const links = selectedItems.map((item) => `https://gainfile.com/s/${item.kind}-${item.id}`).join('\n');
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(links).catch(() => {});
    }
    clearSelection();
  };

  const itemActionHandlers = {
    onMove: openMoveModal,
    onCopy: openCopyModal,
    onGetLink: copyLink,
    onDelete: deleteItem,
    onTogglePublish: togglePublish,
    onSetAccess: setFileAccess,
    isSelected,
    onToggleSelect: toggleSelect,
  };

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            File <span className="text-gradient from-amber-400 to-orange-500">Manager</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Central storage for project documents and assets.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="glass" size="lg" className="font-bold gap-2" onClick={() => setIsCreateOpen(true)}>
            <RiFolderAddLine size={20} /> New Folder
          </Button>
          <Button variant="warning" size="lg" className="font-bold gap-2 hover:text-white hover:bg-amber-500" onClick={() => router.push('/upload')}>
            <RiAddFill size={20} /> Upload New
          </Button>
        </div>
      </motion.div>

      <FileManagerStats stats={stats} />

      <div className="mb-6">
        <FileSearchBar value={searchTerm} onChange={handleSearchChange} />
      </div>

      <FileManagerToolbar
        currentFolder={currentFolder}
        currentFolderData={currentFolderData}
        onGoToRoot={goToRoot}
        sortBy={sortBy}
        onSortChange={handleSortChange}
        view={view}
        onViewChange={setView}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
        publicOnly={publicOnly}
        onPublicOnlyChange={setPublicOnly}
        folders={folders}
        selectedCount={selectedItems.length}
        bulkMoveDestination={bulkMoveDestination}
        onBulkMoveDestinationChange={setBulkMoveDestination}
        onBulkMove={handleBulkMove}
        onBulkDelete={handleBulkDelete}
        onBulkPublish={handleBulkPublish}
        onBulkSetAccess={handleBulkSetAccess}
        onBulkGetLinks={handleBulkGetLinks}
        onClearSelection={clearSelection}
      />

      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-xl font-bold">{currentFolderData ? currentFolderData.name : 'Root'}</h3>
        <span className="text-xs font-semibold text-[var(--text-secondary)]">{filteredItems.length} items</span>
      </div>

      {view === 'grid' ? (
        <FileGridView items={pagedItems} onOpenFolder={openFolder} {...itemActionHandlers} />
      ) : (
        <FileListView
          items={pagedItems}
          sortBy={sortBy}
          onToggleSort={toggleSort}
          onOpenFolder={openFolder}
          allSelected={allPagedSelected}
          onToggleSelectAll={toggleSelectAll}
          {...itemActionHandlers}
        />
      )}

      {filteredItems.length === 0 && (
        <div className="rounded-3xl border border-dashed border-[var(--glass-border)] p-14 text-center">
          {searchTerm ? (
            <>
              <RiSearchLine className="mx-auto text-5xl text-[var(--text-secondary)]" />
              <h3 className="mt-4 text-lg font-bold">No results found</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Try a different search term.</p>
            </>
          ) : (
            <>
              <RiFolder3Fill className="mx-auto text-5xl text-[var(--text-secondary)]" />
              <h3 className="mt-4 text-lg font-bold">This folder is empty</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Upload files to start filling this folder.</p>
            </>
          )}
        </div>
      )}

      {filteredItems.length > 0 && totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={safePage === 1} />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <PaginationItem key={pageNumber}>
                  <PaginationLink isActive={pageNumber === safePage} onClick={() => setPage(pageNumber)}>
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext onClick={() => setPage((current) => Math.min(totalPages, current + 1))} disabled={safePage === totalPages} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}

      <CreateFolderModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        value={newFolderName}
        onChange={(event) => setNewFolderName(event.target.value)}
        onSubmit={createFolder}
      />

      <MoveCopyModal
        target={moveCopyTarget}
        folders={folders}
        onSelectDestination={handleSelectDestination}
        onClose={() => setMoveCopyTarget(null)}
      />
    </div>
  );
};

export default FileManager;
