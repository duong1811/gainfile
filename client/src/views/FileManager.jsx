import React, { useMemo, useState, useSyncExternalStore } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { RiAddFill, RiFolder3Fill, RiFolderAddLine } from 'react-icons/ri';
import { Button } from '../components/ui/Button';
import CreateFolderModal from '../components/file-manager/CreateFolderModal';
import FileGridView from '../components/file-manager/FileGridView';
import FileListView from '../components/file-manager/FileListView';
import FileManagerToolbar from '../components/file-manager/FileManagerToolbar';
import QuickFoldersSection from '../components/file-manager/QuickFoldersSection';
import {
  MAX_RECENT_FOLDERS,
  RECENT_FOLDERS_EVENT,
  RECENT_FOLDERS_KEY,
  filesByLocation,
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

  const recentFoldersRaw = useSyncExternalStore(subscribeToRecentFolders, getRecentFoldersSnapshot, getServerRecentFoldersSnapshot);
  const recentFolderIds = useMemo(() => JSON.parse(recentFoldersRaw), [recentFoldersRaw]);

  const currentFolderData = folders.find((folder) => folder.id === currentFolder);
  const quickFolders = recentFolderIds
    .map((id) => folders.find((folder) => folder.id === id))
    .filter(Boolean);

  const items = useMemo(() => {
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
  }, [currentFolder, folders, sortBy]);

  const openFolder = (folderId) => {
    setCurrentFolder(folderId);
    const current = JSON.parse(window.localStorage.getItem(RECENT_FOLDERS_KEY) || '[]');
    const next = [folderId, ...current.filter((id) => id !== folderId)].slice(0, MAX_RECENT_FOLDERS);
    window.localStorage.setItem(RECENT_FOLDERS_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(RECENT_FOLDERS_EVENT));
  };

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
          <Button variant="outline" size="lg" className="font-bold gap-2" onClick={() => setIsCreateOpen(true)}>
            <RiFolderAddLine size={20} /> New Folder
          </Button>
          <Button variant="glass" size="lg" className="font-bold gap-2 text-amber-500 hover:text-white hover:bg-amber-500" onClick={() => router.push('/upload')}>
            <RiAddFill size={20} /> Upload New
          </Button>
        </div>
      </motion.div>

      {!currentFolder && (
        <QuickFoldersSection quickFolders={quickFolders} filesByLocation={filesByLocation} onOpenFolder={openFolder} />
      )}

      <FileManagerToolbar
        currentFolder={currentFolder}
        currentFolderData={currentFolderData}
        onGoToRoot={() => setCurrentFolder(null)}
        sortBy={sortBy}
        onSortChange={handleSortChange}
        view={view}
        onViewChange={setView}
      />

      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-xl font-bold">{currentFolderData ? currentFolderData.name : 'Root'}</h3>
        <span className="text-xs font-semibold text-[var(--text-secondary)]">{items.length} items</span>
      </div>

      {view === 'grid' ? (
        <FileGridView items={items} onOpenFolder={openFolder} />
      ) : (
        <FileListView items={items} sortBy={sortBy} onToggleSort={toggleSort} onOpenFolder={openFolder} />
      )}

      {items.length === 0 && (
        <div className="rounded-3xl border border-dashed border-[var(--glass-border)] p-14 text-center">
          <RiFolder3Fill className="mx-auto text-5xl text-[var(--text-secondary)]" />
          <h3 className="mt-4 text-lg font-bold">This folder is empty</h3>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">Upload files to start filling this folder.</p>
        </div>
      )}

      <CreateFolderModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        value={newFolderName}
        onChange={(event) => setNewFolderName(event.target.value)}
        onSubmit={createFolder}
      />
    </div>
  );
};

export default FileManager;
