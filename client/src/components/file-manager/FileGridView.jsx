import React from 'react';
import { RiFolder3Fill } from 'react-icons/ri';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { Checkbox } from '../ui/Checkbox';
import FileItemActionsMenu from './FileItemActionsMenu';
import FileTypeIcon from './FileTypeIcon';

const FileGridView = ({ items, onOpenFolder, isSelected, onToggleSelect, onMove, onCopy, onGetLink, onDelete, onTogglePublish, onSetAccess }) => (
  <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
    {items.map((item, index) => (
      <Card
        key={`${item.kind}-${item.id}`}
        variant="interactive"
        transition={{ delay: index * 0.04 }}
        className={`group relative cursor-pointer ${isSelected(item) ? 'ring-2 ring-[var(--aurora-1)]' : ''}`}
        onClick={() => item.kind === 'folder' && onOpenFolder(item.id)}
      >
        <div
          className="absolute left-4 top-4 z-10"
          onClick={(event) => event.stopPropagation()}
        >
          <Checkbox checked={isSelected(item)} onCheckedChange={() => onToggleSelect(item)} />
        </div>
        <div className="mb-5 flex items-start justify-between pl-7">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-primary)]">
            {item.kind === 'folder' ? (
              <RiFolder3Fill size={36} className="text-amber-500 transition-transform group-hover:scale-110" />
            ) : (
              <FileTypeIcon type={item.type} />
            )}
          </div>
          <FileItemActionsMenu
            item={item}
            onMove={onMove}
            onCopy={onCopy}
            onGetLink={onGetLink}
            onDelete={onDelete}
            onTogglePublish={onTogglePublish}
            onSetAccess={onSetAccess}
          />
        </div>
        <h4 className="truncate text-sm font-bold">{item.name}</h4>
        <div className="mt-2 flex items-center justify-between gap-3 text-xs text-[var(--text-secondary)]">
          <span>{item.size}</span>
          <span className="truncate">{item.updated}</span>
        </div>
        {item.kind === 'file' && (
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <Badge variant="outline" color={item.published ? 'success' : 'neutral'} size="xs">
              {item.published ? 'Published' : 'Unpublished'}
            </Badge>
            <Badge variant="outline" color={item.access === 'premium' ? 'warning' : 'primary'} size="xs">
              {item.access === 'premium' ? 'Premium Only' : 'Free Download'}
            </Badge>
          </div>
        )}
      </Card>
    ))}
  </div>
);

export default FileGridView;
