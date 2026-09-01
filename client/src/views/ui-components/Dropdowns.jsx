import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  RiArrowDownSLine,
  RiUserLine,
  RiSettingsLine,
  RiLogoutBoxLine,
  RiShieldCheckLine,
  RiSearchLine,
  RiCheckLine
} from 'react-icons/ri';
import { Card } from '../../components/ui/Card';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownHeader
} from '../../components/ui/Dropdown';

const Dropdowns = () => {
  const [selectedSort, setSelectedSort] = useState('Newest First');
  const sorts = ['Newest First', 'Oldest First', 'Highest Price', 'Lowest Price'];

  return (
    <div className="py-6 md:py-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] space-y-10 z-0 relative">
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Dropdown Components</h1>
        <p className="text-[var(--text-secondary)]">Menu overlays featuring complex nested filtering, sorting actions, and mega properties.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">

        {/* Standard Actions */}
        <Card padding="lg" overflow="visible">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">File Actions</h2>

          <Dropdown className="w-full max-w-[220px]">
            <DropdownTrigger className="w-full bg-zinc-800 hover:bg-zinc-700 text-white">
              Export Options
            </DropdownTrigger>
            <DropdownContent width="w-full" className="bg-[var(--bg-primary)] p-2">
              <DropdownItem>Export to PDF</DropdownItem>
              <DropdownItem>Download CSV</DropdownItem>
              <DropdownSeparator />
              <DropdownItem variant="danger">Empty Trash</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </Card>

        {/* Profile Dropdown */}
        <Card padding="lg" overflow="visible">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Profile Settings</h2>

          <Dropdown>
            <DropdownTrigger asChild showChevron={false}>
              <button className="flex items-center gap-3 p-1 pr-4 bg-black/20 border border-[var(--glass-border)] rounded-full hover:bg-white/5 transition ring-2 ring-transparent focus:ring-[var(--aurora-1)]">
                <img src="/images/user/user-2.jpg" className="w-10 h-10 rounded-full border border-[var(--glass-border)]" alt="Avatar" />
                <div className="text-left hidden sm:block">
                  <div className="text-sm font-bold text-[var(--text-primary)] leading-none">Emily R.</div>
                  <div className="text-[10px] text-[var(--aurora-1)] mt-1 tracking-widest uppercase font-bold">Admin</div>
                </div>
                <RiArrowDownSLine className="text-lg text-[var(--text-secondary)] ml-1" />
              </button>
            </DropdownTrigger>
            <DropdownContent align="right" width="w-64" offset="mt-3">
              <DropdownHeader>
                <p className="text-xs text-[var(--text-secondary)] mb-1 uppercase tracking-widest font-bold">Workspace Details</p>
                <p className="font-bold text-[var(--text-primary)] text-sm truncate">Acme Inc. Enterprise</p>
                <div className="mt-2 text-xs text-[var(--aurora-1)] flex items-center gap-1 hover:underline cursor-pointer"><RiSettingsLine /> Manage billing</div>
              </DropdownHeader>
              <div className="p-2 space-y-1">
                <DropdownItem><RiUserLine className="text-lg opacity-70 mr-3" /> Edit Profile</DropdownItem>
                <DropdownItem><RiShieldCheckLine className="text-lg opacity-70 mr-3" /> Preferences</DropdownItem>
              </div>
              <DropdownSeparator />
              <div className="p-2">
                <DropdownItem variant="danger"><RiLogoutBoxLine className="text-lg mr-3" /> Sign out securely</DropdownItem>
              </div>
            </DropdownContent>
          </Dropdown>
        </Card>

        {/* Filter / Form Dropdown */}
        <Card padding="lg" overflow="visible" className="lg:col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Filter & Sort Combinations</h2>

          <Dropdown className="w-full lg:max-w-xs">
            <DropdownTrigger className="w-full px-5 py-3 border border-[var(--glass-border)] rounded-xl bg-black/10 hover:bg-black/20 transition group shadow-inner" showChevron={false}>
              <div className="flex flex-col items-start gap-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)]">Sort By</span>
                <span className="text-sm font-bold text-[var(--aurora-1)]">{selectedSort}</span>
              </div>
              <RiArrowDownSLine className="text-2xl text-[var(--text-secondary)] group-hover:text-white transition-colors" />
            </DropdownTrigger>
            <DropdownContent align="right" width="w-full md:w-80" offset="mt-3">
              <div className="p-3 border-b border-[var(--glass-border)] bg-[var(--dropdown-footer-bg)]">
                <div className="relative">
                  <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
                  <input
                    type="text"
                    placeholder="Search parameters..."
                    className="w-full bg-[var(--bg-primary)] border border-[var(--glass-border)] rounded-lg py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--aurora-1)] transition-colors"
                  />
                </div>
              </div>
              <div className="p-2 max-h-48 overflow-y-auto no-scrollbar">
                <div className="py-2 px-3 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">Date & Price Sorting</div>
                {sorts.map((sort) => (
                  <DropdownItem
                    key={sort}
                    onClick={() => setSelectedSort(sort)}
                    className="justify-between"
                  >
                    <span className={`${selectedSort === sort ? 'text-[var(--aurora-1)] font-bold' : ''}`}>{sort}</span>
                    {selectedSort === sort && <RiCheckLine className="text-[var(--aurora-1)] text-lg" />}
                  </DropdownItem>
                ))}
              </div>
            </DropdownContent>
          </Dropdown>
        </Card>

      </div>
    </div>
  );
};

export default Dropdowns;
