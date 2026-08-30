import React, { useSyncExternalStore } from 'react';
import { motion } from 'framer-motion';
import {
  RiMenuFoldLine,
  RiMenuUnfoldLine,
  RiMoonLine,
  RiSunLine,
  RiNotification3Line,
  RiUser3Line,
  RiSearchLine,
  RiSettings4Line,
  RiLoginBoxLine,
  RiLogoutBoxRLine,
  RiInformationLine,
  RiPlayCircleLine
} from 'react-icons/ri';
import { useTheme } from '../context/ThemeContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Badge } from './ui/Badge';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownHeader
} from './ui/Dropdown';

const subscribeToAuth = (callback) => {
  window.addEventListener('storage', callback);
  window.addEventListener('gainfile-auth-change', callback);

  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('gainfile-auth-change', callback);
  };
};

const getAuthSnapshot = () => window.localStorage.getItem('gainfile-authenticated') === 'true';
const getServerAuthSnapshot = () => false;

const Topbar = ({ isHorizontalMenu = false, children = null }) => {
  const router = useRouter();
  const {
    isSidebarCollapsed, toggleSidebar,
    isDarkMode, toggleTheme,
    isRTL, toggleDirection
  } = useTheme();
  const isAuthenticated = useSyncExternalStore(subscribeToAuth, getAuthSnapshot, getServerAuthSnapshot);

  const handleSignOut = () => {
    window.localStorage.removeItem('gainfile-authenticated');
    window.dispatchEvent(new Event('gainfile-auth-change'));
    window.location.href = '/';
  };

  return (
    <motion.header
      className="sticky top-0 z-[1000] glass-card mb-6 flex items-center gap-4 border-b border-[var(--glass-border)] px-4 py-4 md:px-20"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="flex shrink-0 items-center gap-4">
        {isHorizontalMenu && (
          <Link href="/dashboard" className="flex shrink-0 items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] text-xl text-white shadow-lg shadow-[var(--aurora-1)]/20">
              <RiPlayCircleLine />
            </span>
            <span className="hidden sm:block">
              <span className="block text-lg font-bold leading-none text-[var(--text-primary)]">Gainfile</span>
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)]">Video Cloud</span>
            </span>
          </Link>
        )}

        <button
          className={`${isHorizontalMenu ? 'hidden' : 'hidden md:flex'} p-2 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--glass-border)] hover:text-[var(--text-primary)] transition-colors`}
          onClick={toggleSidebar}
        >
          {isSidebarCollapsed ? (isRTL ? <RiMenuFoldLine size={24} /> : <RiMenuUnfoldLine size={24} />) : (isRTL ? <RiMenuUnfoldLine size={24} /> : <RiMenuFoldLine size={24} />)}
        </button>
      </div>

      {children}

      <div className="relative ms-auto flex shrink-0 items-center gap-2 md:gap-4">

        <button
          className="p-2 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--glass-border)] hover:text-[var(--text-primary)] transition-colors"
          onClick={toggleTheme}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? <RiSunLine size={24} /> : <RiMoonLine size={24} />}
        </button>

        {isAuthenticated ? (
          <>
            <div className="mx-2 hidden h-6 w-px bg-[var(--glass-border)] md:block" />

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
                <DropdownItem onClick={() => router.push('/settings')} className="gap-2">
                  <RiSettings4Line size={18} className="opacity-70" />
                  Account Settings
                </DropdownItem>
                <DropdownItem onClick={() => router.push('/pricing')} className="gap-2">
                  <RiSearchLine size={18} className="opacity-70" />
                  Billing & Plans
                </DropdownItem>
              </div>
              <DropdownSeparator />
              <div className="p-1">
                <DropdownItem variant="danger" onClick={handleSignOut} className="gap-2 font-bold">
                  <RiLogoutBoxRLine size={18} className={isRTL ? "rotate-180" : ""} />
                  Sign Out
                </DropdownItem>
              </div>
            </DropdownContent>
            </Dropdown>
          </>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-[var(--aurora-1)]/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--aurora-1)]/35"
          >
            <RiLoginBoxLine size={18} />
            <span className="hidden sm:inline">Sign In</span>
          </Link>
        )}
      </div>
    </motion.header>
  );
};

export default Topbar;

