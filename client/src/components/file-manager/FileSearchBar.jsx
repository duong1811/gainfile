import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

const FileSearchBar = ({ value, onChange }) => (
  <label className="relative flex w-full items-center">
    <RiSearchLine className="pointer-events-none absolute left-4 text-[var(--text-secondary)]" size={18} />
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search files and folders..."
      className="w-full rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)] py-2.5 pl-11 pr-4 text-sm font-medium outline-none transition-colors focus:border-[var(--aurora-1)]"
    />
  </label>
);

export default FileSearchBar;
