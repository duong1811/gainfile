import React from 'react';
import { RiFolder3Fill, RiMore2Fill } from 'react-icons/ri';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import FileTypeIcon from './FileTypeIcon';

const FileGridView = ({ items, onOpenFolder }) => (
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {items.map((item, index) => (
      <Card
        key={`${item.kind}-${item.id}`}
        variant="interactive"
        transition={{ delay: index * 0.04 }}
        className="group cursor-pointer"
        onClick={() => item.kind === 'folder' && onOpenFolder(item.id)}
      >
        <div className="mb-5 flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-primary)]">
            {item.kind === 'folder' ? (
              <RiFolder3Fill size={36} className="text-amber-500 transition-transform group-hover:scale-110" />
            ) : (
              <FileTypeIcon type={item.type} />
            )}
          </div>
          <Button variant="ghost" size="icon-xs" onClick={(event) => event.stopPropagation()}>
            <RiMore2Fill size={20} />
          </Button>
        </div>
        <h4 className="truncate text-sm font-bold">{item.name}</h4>
        <div className="mt-2 flex items-center justify-between gap-3 text-xs text-[var(--text-secondary)]">
          <span>{item.size}</span>
          <span className="truncate">{item.updated}</span>
        </div>
      </Card>
    ))}
  </div>
);

export default FileGridView;
