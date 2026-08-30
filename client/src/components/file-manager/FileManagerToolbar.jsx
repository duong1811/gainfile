import React from 'react';
import { RiArrowRightSLine, RiGridFill, RiHome5Line, RiListCheck, RiSortAsc } from 'react-icons/ri';

const FileManagerToolbar = ({
  currentFolder,
  currentFolderData,
  onGoToRoot,
  sortBy,
  onSortChange,
  view,
  onViewChange,
}) => (
  <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-4 lg:flex-row lg:items-center lg:justify-between">
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

    <div className="flex flex-wrap items-center gap-2">
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
);

export default FileManagerToolbar;
