import React from 'react';
import { RiFile3Line, RiFolder3Line, RiHardDriveLine, RiPauseCircleLine } from 'react-icons/ri';

const statItems = [
  { key: 'storageUsed', label: 'Storage Used', icon: RiHardDriveLine, color: 'from-blue-500 to-cyan-500' },
  { key: 'totalFiles', label: 'Total Files', icon: RiFile3Line, color: 'from-emerald-500 to-teal-500' },
  { key: 'totalFolders', label: 'Total Folders', icon: RiFolder3Line, color: 'from-amber-500 to-orange-500' },
  { key: 'inactiveFiles', label: 'Inactive Files', icon: RiPauseCircleLine, color: 'from-rose-500 to-pink-500' },
];

const FileManagerStats = ({ stats }) => (
  <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
    {statItems.map(({ key, label, icon: Icon, color }) => (
      <div
        key={key}
        className="flex items-center gap-4 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-4"
      >
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}>
          <Icon size={20} />
        </div>
        <div className="min-w-0">
          <p className="truncate text-[11px] font-semibold uppercase tracking-wider text-[var(--text-secondary)]">{label}</p>
          <p className="truncate text-lg font-black">{stats[key]}</p>
        </div>
      </div>
    ))}
  </div>
);

export default FileManagerStats;
