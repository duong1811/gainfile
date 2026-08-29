import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  RiMenuFoldLine,
  RiMenuUnfoldLine,
  RiMoonLine,
  RiSunLine,
  RiTranslate2,
  RiNotification3Line,
  RiUser3Line,
  RiSearchLine,
  RiSettings4Line,
  RiLogoutBoxRLine,
  RiInformationLine
} from 'react-icons/ri';
import { useTheme } from '../context/ThemeContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Badge } from './ui/Badge';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownHeader
} from './ui/Dropdown';

const Topbar = () => {
  const {
    isSidebarCollapsed, toggleSidebar,
    isDarkMode, toggleTheme,
    isRTL, toggleDirection
  } = useTheme();

  const pathname = usePathname();
  const location = { pathname };

  return (
    <motion.header
      className="sticky top-0 z-[900] glass-card border-b border-[var(--glass-border)] px-6 py-4 mb-6 flex items-center justify-between"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="flex items-center gap-4">
        <button
          className="hidden md:flex p-2 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--glass-border)] hover:text-[var(--text-primary)] transition-colors"
          onClick={toggleSidebar}
        >
          {isSidebarCollapsed ? (isRTL ? <RiMenuFoldLine size={24} /> : <RiMenuUnfoldLine size={24} />) : (isRTL ? <RiMenuUnfoldLine size={24} /> : <RiMenuFoldLine size={24} />)}
        </button>

        <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--glass-border)] border border-[var(--glass-border)] min-w-[300px]">
          <RiSearchLine className="text-[var(--text-secondary)]" />
          <input
            type="text"
            placeholder="Search modules, habits, or entries..."
            className="bg-transparent border-none outline-none text-sm text-[var(--text-primary)] w-full placeholder:text-[var(--text-secondary)]"
            dir={isRTL ? 'rtl' : 'ltr'}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4 relative">
        <button
          className="p-2 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--glass-border)] hover:text-[var(--text-primary)] transition-colors"
          onClick={toggleDirection}
          title={isRTL ? "Switch to LTR" : "Switch to RTL"}
        >
          <RiTranslate2 size={24} />
        </button>

        <button
          className="p-2 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--glass-border)] hover:text-[var(--text-primary)] transition-colors"
          onClick={toggleTheme}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? <RiSunLine size={24} /> : <RiMoonLine size={24} />}
        </button>

        <div className="w-px h-6 bg-[var(--glass-border)] mx-2 hidden md:block"></div>

        {/* Notifications Dropdown */}
        <Dropdown>
          <DropdownTrigger asChild showChevron={false}>
            <button className="relative p-2 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--glass-border)] hover:text-[var(--text-primary)] transition-colors">
              <RiNotification3Line size={24} />
              <Badge variant="dot" color="rose" className="absolute top-1.5 right-1.5 p-0 border-2 border-[var(--bg-primary)]" />
            </button>
          </DropdownTrigger>
          <DropdownContent align={isRTL ? 'left' : 'right'} width="w-80" offset="mt-4">
            <DropdownHeader className="flex justify-between items-center">
              <h4 className="font-bold text-[var(--text-primary)]">Notifications</h4>
              <Badge variant="solid" color="aurora-solid" rounded="full" size="xs">2 New</Badge>
            </DropdownHeader>
            <div className="max-h-64 overflow-y-auto custom-scrollbar">
              <DropdownItem className="gap-3 py-4 border-b border-[var(--glass-border)]" closeOnSelect={false}>
                <div className="w-10 h-10 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center flex-shrink-0">
                  <RiInformationLine size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--text-primary)]">Goal Deadline Approaching</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 font-medium">Project alpha is due in 3 days.</p>
                  <p className="text-[10px] text-[var(--aurora-1)] mt-2 font-bold uppercase tracking-wider">2 hours ago</p>
                </div>
              </DropdownItem>
              <DropdownItem className="gap-3 py-4" closeOnSelect={false}>
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                  <RiSearchLine size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--text-primary)]">Weekly Report Ready</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 font-medium">Your productivity skyrocketed this week.</p>
                  <p className="text-[10px] text-[var(--aurora-1)] mt-2 font-bold uppercase tracking-wider">1 day ago</p>
                </div>
              </DropdownItem>
            </div>
            <DropdownSeparator />
            <div className="p-2 text-center bg-[var(--dropdown-footer-bg)]">
              <Link href="/notifications" className="text-xs text-[var(--aurora-1)] hover:underline font-bold uppercase tracking-widest">View All Notifications</Link>
            </div>
          </DropdownContent>
        </Dropdown>

        {/* Profile Dropdown */}
        <Dropdown>
          <DropdownTrigger asChild showChevron={false}>
            <button className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] p-[2px] cursor-pointer hover:scale-105 transition-transform ml-2 mr-2">
              <div className="w-full h-full rounded-full bg-[var(--bg-primary)] flex items-center justify-center relative overflow-hidden">
                <RiUser3Line className="text-[var(--aurora-1)] relative z-10" />
                <div className="absolute inset-0 bg-[var(--aurora-1)]/10"></div>
              </div>
            </button>
          </DropdownTrigger>
          <DropdownContent align={isRTL ? 'left' : 'right'} width="w-56" offset="mt-4">
            <DropdownHeader>
              <p className="font-bold text-[var(--text-primary)] truncate">Alexander Pierce</p>
              <p className="text-[10px] text-[var(--text-secondary)] truncate font-bold uppercase tracking-widest mt-0.5">alexander@trackify.app</p>
            </DropdownHeader>
            <div className="p-1">
              <DropdownItem asChild>
                <Link href="/settings" className="gap-3">
                  <div className="flex items-center gap-2">
                    <RiSettings4Line size={18} className="opacity-70" />
                    Account Settings
                  </div>
                </Link>
              </DropdownItem>
              <DropdownItem asChild>
                <Link href="/pricing" className="gap-3">
                  <div className="flex items-center gap-2">
                    <RiSearchLine size={18} className="opacity-70" />
                    Billing & Plans
                  </div>
                </Link>
              </DropdownItem>
            </div>
            <DropdownSeparator />
            <div className="p-1">
              <DropdownItem variant="danger" asChild>
                <Link href="/" className="gap-3 font-bold">
                  <div className="flex items-center gap-2">
                    <RiLogoutBoxRLine size={18} className={isRTL ? "rotate-180" : ""} />
                    Sign Out
                  </div>
                </Link>
              </DropdownItem>
            </div>
          </DropdownContent>
        </Dropdown>
      </div>
    </motion.header>
  );
};

export default Topbar;

