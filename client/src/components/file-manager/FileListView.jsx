import React from 'react';
import { RiArrowDownSLine, RiArrowUpSLine, RiExpandUpDownLine, RiFolder3Fill } from 'react-icons/ri';
import { Checkbox } from '../ui/Checkbox';
import { Switch } from '../ui/Switch';
import FileItemActionsMenu from './FileItemActionsMenu';
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

const FileListView = ({
  items,
  sortBy,
  onToggleSort,
  onOpenFolder,
  isSelected,
  onToggleSelect,
  allSelected,
  onToggleSelectAll,
  onMove,
  onCopy,
  onGetLink,
  onDelete,
  onTogglePublish,
  onSetAccess,
}) => (
  <div className="overflow-x-auto rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)]">
    <table className="w-full min-w-[960px] text-left text-sm">
      <thead className="border-b border-[var(--glass-border)] text-xs uppercase tracking-wider text-[var(--text-secondary)]">
        <tr>
          <th className="w-10 px-5 py-4">
            <Checkbox checked={allSelected} onCheckedChange={onToggleSelectAll} />
          </th>
          <th className="px-5 py-4"><SortableHeader label="Name" field="name" sortBy={sortBy} onToggleSort={onToggleSort} /></th>
          <th className="px-5 py-4"><SortableHeader label="Size" field="size" sortBy={sortBy} onToggleSort={onToggleSort} /></th>
          <th className="px-5 py-4"><SortableHeader label="Modified" field="date" sortBy={sortBy} onToggleSort={onToggleSort} /></th>
          <th className="px-5 py-4">Published</th>
          <th className="px-5 py-4">Premium</th>
          <th className="w-14 px-5 py-4" />
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr
            key={`${item.kind}-${item.id}`}
            onClick={() => item.kind === 'folder' && onOpenFolder(item.id)}
            className={`group cursor-pointer border-b border-[var(--glass-border)] transition-colors last:border-0 hover:bg-[var(--glass-border)]/50 ${isSelected(item) ? 'bg-[var(--aurora-1)]/5' : ''}`}
          >
            <td className="px-5 py-4" onClick={(event) => event.stopPropagation()}>
              <Checkbox checked={isSelected(item)} onCheckedChange={() => onToggleSelect(item)} />
            </td>
            <td className="px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--bg-primary)]">
                  {item.kind === 'folder' ? <RiFolder3Fill className="text-2xl text-amber-500" /> : <FileTypeIcon type={item.type} />}
                </span>
                <span className="font-bold">{item.name}</span>
              </div>
            </td>
            <td className="px-5 py-4 font-mono text-xs text-[var(--text-secondary)]">{item.size}</td>
            <td className="px-5 py-4 text-xs text-[var(--text-secondary)]">{item.updated}</td>
            <td className="px-5 py-4">
              {item.kind === 'file' && (
                <label className="flex items-center gap-2" onClick={(event) => event.stopPropagation()}>
                  <Switch checked={item.published} onChange={() => onTogglePublish(item)} variant="emerald" />
                </label>
              )}
            </td>
            <td className="px-5 py-4">
              {item.kind === 'file' && (
                <label className="flex items-center gap-2" onClick={(event) => event.stopPropagation()}>
                  <Switch checked={item.access === 'premium'} onChange={(checked) => onSetAccess(item, checked ? 'premium' : 'free')} variant="default" />
                </label>
              )}
            </td>
            <td className="px-5 py-4">
              <FileItemActionsMenu
                item={item}
                onMove={onMove}
                onCopy={onCopy}
                onGetLink={onGetLink}
                onDelete={onDelete}
                onTogglePublish={onTogglePublish}
                onSetAccess={onSetAccess}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default FileListView;
