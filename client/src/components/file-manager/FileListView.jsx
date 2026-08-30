import React from 'react';
import { RiArrowDownSLine, RiArrowUpSLine, RiExpandUpDownLine, RiFolder3Fill, RiMore2Fill } from 'react-icons/ri';
import { Button } from '../ui/Button';
import FileTypeIcon from './FileTypeIcon';

const SortableHeader = ({ label, field, sortBy, onToggleSort }) => {
  const [currentField, currentDirection] = sortBy.split('-');
  const icon = currentField !== field
    ? <RiExpandUpDownLine className="text-[var(--text-secondary)]/60" size={14} />
    : currentDirection === 'asc' ? <RiArrowUpSLine size={14} /> : <RiArrowDownSLine size={14} />;

  return (
    <button
      type="button"
      onClick={() => onToggleSort(field)}
      className="flex items-center gap-1 font-bold uppercase tracking-wider transition-colors hover:text-[var(--text-primary)]"
    >
      {label} {icon}
    </button>
  );
};

const FileListView = ({ items, sortBy, onToggleSort, onOpenFolder }) => (
  <div className="overflow-x-auto rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)]">
    <table className="w-full min-w-[650px] text-left text-sm">
      <thead className="border-b border-[var(--glass-border)] text-xs uppercase tracking-wider text-[var(--text-secondary)]">
        <tr>
          <th className="px-5 py-4"><SortableHeader label="Name" field="name" sortBy={sortBy} onToggleSort={onToggleSort} /></th>
          <th className="px-5 py-4">Type</th>
          <th className="px-5 py-4"><SortableHeader label="Size" field="size" sortBy={sortBy} onToggleSort={onToggleSort} /></th>
          <th className="px-5 py-4"><SortableHeader label="Modified" field="date" sortBy={sortBy} onToggleSort={onToggleSort} /></th>
          <th className="w-14 px-5 py-4" />
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr
            key={`${item.kind}-${item.id}`}
            onClick={() => item.kind === 'folder' && onOpenFolder(item.id)}
            className="group cursor-pointer border-b border-[var(--glass-border)] transition-colors last:border-0 hover:bg-[var(--glass-border)]/50"
          >
            <td className="px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--bg-primary)]">
                  {item.kind === 'folder' ? <RiFolder3Fill className="text-2xl text-amber-500" /> : <FileTypeIcon type={item.type} />}
                </span>
                <span className="font-bold">{item.name}</span>
              </div>
            </td>
            <td className="px-5 py-4 capitalize text-[var(--text-secondary)]">{item.kind === 'folder' ? 'Folder' : item.type}</td>
            <td className="px-5 py-4 font-mono text-xs text-[var(--text-secondary)]">{item.size}</td>
            <td className="px-5 py-4 text-xs text-[var(--text-secondary)]">{item.updated}</td>
            <td className="px-5 py-4">
              <Button variant="ghost" size="icon-xs" onClick={(event) => event.stopPropagation()}><RiMore2Fill /></Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default FileListView;
