import React from 'react';
import { RiFolder3Fill, RiMore2Fill, RiTimeLine } from 'react-icons/ri';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const QuickFoldersSection = ({ quickFolders, filesByLocation, onOpenFolder }) => (
  <div className="mb-10">
    <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
      <RiTimeLine className="text-[var(--aurora-1)]" /> Quick Folders
    </h3>
    {quickFolders.length > 0 ? (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {quickFolders.map((folder, idx) => (
          <Card
            key={folder.id}
            variant="interactive"
            transition={{ delay: idx * 0.05 }}
            className="group cursor-pointer"
            onClick={() => onOpenFolder(folder.id)}
          >
            <div className="mb-4 flex items-start justify-between">
              <RiFolder3Fill size={40} className="text-amber-500 transition-transform group-hover:scale-110" />
              <Button variant="ghost" size="icon-xs" onClick={(event) => event.stopPropagation()}>
                <RiMore2Fill size={20} />
              </Button>
            </div>
            <h4 className="mb-1 truncate text-lg font-bold">{folder.name}</h4>
            <div className="flex items-center justify-between text-xs font-medium text-[var(--text-secondary)]">
              <span>{filesByLocation[folder.id]?.length || 0} files</span>
              <span className="truncate">{folder.updated}</span>
            </div>
          </Card>
        ))}
      </div>
    ) : (
      <p className="rounded-2xl border border-dashed border-[var(--glass-border)] p-6 text-sm text-[var(--text-secondary)]">
        Folders you open will show up here for quick access.
      </p>
    )}
  </div>
);

export default QuickFoldersSection;
