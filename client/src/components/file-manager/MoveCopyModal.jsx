import React from 'react';
import { RiFolder3Fill, RiHome5Line } from 'react-icons/ri';
import { Modal } from '../ui/Modal';

const MoveCopyModal = ({ target, folders, onSelectDestination, onClose }) => {
  if (!target) return null;

  const destinations = [
    { id: null, name: 'My Files' },
    ...folders.filter((folder) => folder.id !== target.currentFolder),
  ];

  return (
    <Modal
      isOpen={Boolean(target)}
      onClose={onClose}
      title={target.mode === 'move' ? `Move "${target.item.name}"` : `Copy "${target.item.name}"`}
      size="sm"
      variant="aurora"
    >
      <p className="mb-4 text-sm text-[var(--text-secondary)]">Choose a destination folder.</p>
      <div className="flex max-h-72 flex-col gap-2 overflow-y-auto">
        {destinations.map((destination) => (
          <button
            key={destination.id ?? 'root'}
            type="button"
            onClick={() => onSelectDestination(destination.id)}
            className="flex items-center gap-3 rounded-xl border border-[var(--glass-border)] px-4 py-3 text-left text-sm font-bold transition-colors hover:border-[var(--aurora-1)] hover:bg-[var(--aurora-1)]/10"
          >
            {destination.id === null ? (
              <RiHome5Line className="text-[var(--aurora-1)]" size={18} />
            ) : (
              <RiFolder3Fill className="text-amber-500" size={18} />
            )}
            {destination.name}
          </button>
        ))}
      </div>
    </Modal>
  );
};

export default MoveCopyModal;
