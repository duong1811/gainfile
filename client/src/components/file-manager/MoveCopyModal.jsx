import React, { useState } from 'react';
import { RiFolder3Fill, RiHome5Line, RiSearchLine } from 'react-icons/ri';
import { Modal } from '../ui/Modal';

const MoveCopyModal = ({ target, folders, onSelectDestination, onClose }) => {
  const [search, setSearch] = useState('');
  const [openedKey, setOpenedKey] = useState(null);

  const targetKey = target ? `${target.mode}-${target.item.id}` : null;
  if (targetKey !== openedKey) {
    setOpenedKey(targetKey);
    setSearch('');
  }

  if (!target) return null;

  const destinations = [
    { id: null, name: 'My Files' },
    ...folders.filter((folder) => folder.id !== target.currentFolder),
  ];

  const query = search.trim().toLowerCase();
  const filteredDestinations = query
    ? destinations.filter((destination) => destination.name.toLowerCase().includes(query))
    : destinations;

  return (
    <Modal
      isOpen={Boolean(target)}
      onClose={onClose}
      title={target.mode === 'move' ? `Move "${target.item.name}"` : `Copy "${target.item.name}"`}
      size="sm"
      variant="aurora"
    >
      <p className="mb-4 text-sm text-[var(--text-secondary)]">Choose a destination folder.</p>
      <label className="relative mb-3 flex w-full items-center">
        <RiSearchLine className="pointer-events-none absolute left-4 text-[var(--text-secondary)]" size={18} />
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          name="destination-search"
          placeholder="Search folders..."
          autoComplete="off"
          className="w-full rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)] py-2.5 pl-11 pr-4 text-sm font-medium outline-none transition-colors focus:border-[var(--aurora-1)]"
        />
      </label>
      <div className="flex max-h-72 flex-col gap-2 overflow-y-auto">
        {filteredDestinations.map((destination) => (
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
        {filteredDestinations.length === 0 && (
          <p className="py-6 text-center text-sm text-[var(--text-secondary)]">No folders found.</p>
        )}
      </div>
    </Modal>
  );
};

export default MoveCopyModal;
