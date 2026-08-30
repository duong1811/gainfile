import React from 'react';
import {
    RiArrowRightSLine,
    RiCloseLine,
    RiDeleteBinLine,
    RiDownloadLine,
    RiEyeOffLine,
    RiFolderTransferLine,
    RiGlobalLine,
    RiGridFill,
    RiHome5Line,
    RiLinkM,
    RiListCheck,
    RiSortAsc,
    RiVipCrownLine,
} from 'react-icons/ri';
import { Button } from '../ui/Button';
import { Switch } from '../ui/Switch';

const PAGE_SIZES = [25, 50, 100, 200];

const FileManagerToolbar = ({
    currentFolder,
    currentFolderData,
    onGoToRoot,
    sortBy,
    onSortChange,
    view,
    onViewChange,
    itemsPerPage,
    onItemsPerPageChange,
    publicOnly,
    onPublicOnlyChange,
    folders,
    selectedCount = 0,
    bulkMoveDestination,
    onBulkMoveDestinationChange,
    onBulkMove,
    onBulkDelete,
    onBulkPublish,
    onBulkSetAccess,
    onBulkGetLinks,
    onClearSelection,
}) => (
    <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-2 text-sm">
                <button
                    type="button"
                    onClick={onGoToRoot}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2 font-bold transition-colors ${currentFolder ? 'text-[var(--text-secondary)] hover:bg-[var(--glass-border)] hover:text-[var(--text-primary)]' : 'bg-[var(--aurora-1)]/10 text-[var(--aurora-1)]'}`}
                >
                    <RiHome5Line /> My Files
                </button>
                {currentFolderData && (
                    <>
                        <RiArrowRightSLine className="shrink-0 text-[var(--text-secondary)]" />
                        <span className="truncate rounded-xl bg-[var(--aurora-1)]/10 px-3 py-2 font-bold text-[var(--aurora-1)]">{currentFolderData.name}</span>
                    </>
                )}
            </nav>

            <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">Per page</span>
                    <div className="flex rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)] p-1">
                        {PAGE_SIZES.map((size) => (
                            <button
                                key={size}
                                type="button"
                                onClick={() => onItemsPerPageChange(size)}
                                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${itemsPerPage === size ? 'bg-emerald-500 text-white' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <label className="flex items-center gap-2">
                    <Switch checked={publicOnly} onChange={onPublicOnlyChange} variant="emerald" />
                    <span className="text-xs font-bold text-[var(--text-secondary)]">Public only</span>
                </label>

                <label className="relative flex items-center">
                    <RiSortAsc className="pointer-events-none absolute left-3 text-[var(--text-secondary)]" />
                    <select
                        value={sortBy}
                        onChange={onSortChange}
                        className="appearance-none rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)] py-2 pl-9 pr-8 text-xs font-bold outline-none focus:border-[var(--aurora-1)]"
                    >
                        <option value="name-asc">Name A–Z</option>
                        <option value="name-desc">Name Z–A</option>
                        <option value="date-desc">Newest first</option>
                        <option value="size-desc">Largest first</option>
                    </select>
                </label>
                <div className="flex rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)] p-1">
                    <button
                        type="button"
                        title="Grid view"
                        onClick={() => onViewChange('grid')}
                        className={`rounded-lg p-2 transition-colors ${view === 'grid' ? 'bg-[var(--aurora-1)] text-white' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                    >
                        <RiGridFill />
                    </button>
                    <button
                        type="button"
                        title="List view"
                        onClick={() => onViewChange('list')}
                        className={`rounded-lg p-2 transition-colors ${view === 'list' ? 'bg-[var(--aurora-1)] text-white' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                    >
                        <RiListCheck />
                    </button>
                </div>
            </div>
        </div>

        {selectedCount > 0 && (
            <div className="flex justify-between gap-4 border-t border-[var(--glass-border)]">
                <div className="flex flex-wrap items-center gap-2 pt-4">
                    <span className="text-sm font-bold text-[var(--aurora-1)]">{selectedCount} selected</span>
                    <Button variant="outline" size="sm" className="gap-1.5 font-bold text-rose-400 hover:bg-rose-500 hover:text-white" onClick={onBulkDelete}>
                        <RiDeleteBinLine size={16} /> Delete
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1.5 font-bold" onClick={() => onBulkPublish(true)}>
                        <RiGlobalLine size={16} /> Publish
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1.5 font-bold" onClick={() => onBulkPublish(false)}>
                        <RiEyeOffLine size={16} /> Unpublish
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1.5 font-bold" onClick={() => onBulkSetAccess('premium')}>
                        <RiVipCrownLine size={16} /> Premium Only
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1.5 font-bold" onClick={() => onBulkSetAccess('free')}>
                        <RiDownloadLine size={16} /> Free Download
                    </Button>
                    <Button variant="success" size="sm" className="gap-1.5 font-bold" onClick={onBulkGetLinks}>
                        <RiLinkM size={16} /> Get Links
                    </Button>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <Button variant="ghost" size="icon-sm" title="Clear selection" onClick={onClearSelection}>
                        <RiCloseLine size={18} />
                    </Button>
                </div>
            </div>
        )}
    </div>
);

export default FileManagerToolbar;
