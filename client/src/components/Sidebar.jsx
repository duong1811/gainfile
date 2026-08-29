import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RiDashboardLine,
  RiMenuLine,
  RiCloseLine,
  RiSettings4Line,
  RiArrowDownSLine,
  RiCustomerService2Line,
  RiUploadCloud2Line,
  RiFolderVideoLine,
  RiGlobalLine,
  RiServerLine,
  RiCloudLine,
  RiPlayCircleLine,
  RiTicket2Line,
  RiVipCrown2Line,
  RiSecurePaymentLine,
  RiUserSharedLine
} from 'react-icons/ri';

import { useTheme } from '../context/ThemeContext';

const menuItems = [
  { path: '/dashboard', icon: RiDashboardLine, label: 'Dashboard' },
  {
    label: 'Upload', icon: RiUploadCloud2Line,
    subItems: [
      { path: '/upload', icon: RiUploadCloud2Line, label: 'Upload from Device' },
      { path: '/upload/remote', icon: RiGlobalLine, label: 'Remote URL' },
      { path: '/upload/cloud', icon: RiCloudLine, label: 'Import from Cloud' },
      { path: '/upload/ftp', icon: RiServerLine, label: 'FTP Upload' },
    ]
  },
  { path: '/file-manager', icon: RiFolderVideoLine, label: 'Video Manager' },
  { path: '/tickets', icon: RiTicket2Line, label: 'Support Tickets' },
  { path: '/upgrade-plan', icon: RiVipCrown2Line, label: 'Premium' },
  { path: '/payment-history', icon: RiSecurePaymentLine, label: 'Payment History' },
  { path: '/affiliate', icon: RiUserSharedLine, label: 'Affiliate' },
  { path: '/settings', icon: RiSettings4Line, label: 'Settings' },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const location = { pathname };
  const { isSidebarCollapsed, toggleSidebar, isRTL } = useTheme();
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (label, defaultOpen = false) => {
    setOpenMenus(prev => ({ ...prev, [label]: !(prev[label] ?? defaultOpen) }));
  };

  useEffect(() => {
    // Auto-scroll to ensure active menu item is properly within view area
    const timeoutId = setTimeout(() => {
      const activeEl = document.querySelector('.active-sidebar-item');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);


  const sidebarVariants = {
    open: {
      x: 0,
      width: isSidebarCollapsed ? 80 : 280,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 30 }
    },
    closed: {
      x: isRTL ? "100%" : "-100%",
      width: 280,
      opacity: 0,
      transition: { type: "spring", stiffness: 200, damping: 30 }
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderLink = (item, isSubItem = false) => {
    const Icon = item.icon;
    const isActive = location.pathname === item.path;

    return (
      <Link
        key={item.path}
        href={item.path}
        className={`block relative group ${isActive ? 'active-sidebar-item' : ''}`}
        onClick={() => isMobile && setIsOpen(false)}
      >
        <motion.div
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${isSubItem ? 'mt-1 text-sm' : 'mt-2'} ${isActive
            ? 'bg-[var(--glass-border)] text-[var(--text-primary)] font-bold'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-border)]'
            } ${isSidebarCollapsed && !isMobile ? 'justify-center px-0' : ''}`}
          whileHover={!isSidebarCollapsed || isMobile ? (isRTL ? { x: -4 } : { x: 4 }) : { scale: 1.1 }}
          title={isSidebarCollapsed && !isMobile ? item.label : ''}
        >
          <Icon className={`${isSubItem ? 'text-lg' : 'text-xl'} flex-shrink-0 ${isActive ? 'text-[var(--aurora-3)]' : ''}`} />
          {(!isSidebarCollapsed || isMobile) && (
            <span className="font-medium whitespace-nowrap">{item.label}</span>
          )}
          {isActive && (
            <motion.div
              layoutId="active-pill"
              className="absolute start-0  w-1.5 h-full bg-[var(--aurora-1)] rounded-e-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </motion.div>
      </Link>
    );
  };

  return (
    <>
      <motion.button
        className="fixed top-4 start-4 z-[1001] p-3 rounded-2xl glass-card text-[var(--text-primary)] md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 start-0 h-screen glass-card border-e border-[var(--glass-border)] z-[1000] overflow-hidden"
        variants={sidebarVariants}
        initial={isMobile ? "closed" : "open"}
        animate={isMobile ? (isOpen ? "open" : "closed") : "open"}
      >
        <div className={`flex h-full flex-col p-6 ${isSidebarCollapsed && !isMobile ? 'px-0 items-center' : ''}`}>
          <div className={`flex flex-shrink-0 items-center gap-3 mb-8 ${isSidebarCollapsed && !isMobile ? 'justify-center' : ''}`}>
            <div className="w-10 h-10 min-w-[40px] rounded-xl bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] flex items-center justify-center shadow-lg">
              <RiPlayCircleLine className="text-white text-2xl" />
            </div>
            {(!isSidebarCollapsed || isMobile) && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)] leading-none">Gainfile</h2>
                <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-[0.2em] font-semibold mt-1">Video Cloud</p>
              </motion.div>
            )}
          </div>

          <nav className={`min-h-0 flex-1 space-y-1 overflow-y-auto no-scrollbar ${isSidebarCollapsed && !isMobile ? 'w-full px-4' : 'pe-1'}`}>
            {menuItems.map((item) => {
              if (item.subItems) {
                const isAnySubActive = item.subItems.some(sub => location.pathname === sub.path);
                const isMenuOpen = openMenus[item.label] ?? isAnySubActive;

                return (
                  <div key={item.label} className="overflow-hidden">
                    <motion.button
                      onClick={() => {
                        if (isSidebarCollapsed) toggleSidebar();
                        toggleMenu(item.label, isAnySubActive);
                      }}
                      className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 mt-2 relative ${isAnySubActive
                        ? 'bg-[var(--glass-border)] text-[var(--text-primary)] font-bold active-sidebar-item'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-border)]'
                        } ${isSidebarCollapsed && !isMobile ? 'justify-center px-0' : 'justify-between'}`}
                      title={isSidebarCollapsed && !isMobile ? item.label : ''}
                      whileHover={!isSidebarCollapsed || isMobile ? (isRTL ? { x: -4 } : { x: 4 }) : { scale: 1.1 }}
                    >
                      <div className={`flex items-center ${isSidebarCollapsed && !isMobile ? '' : 'gap-4'}`}>
                        <item.icon className={`text-xl flex-shrink-0 ${isAnySubActive ? 'text-[var(--aurora-3)]' : ''}`} />
                        {(!isSidebarCollapsed || isMobile) && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="font-bold text-xs uppercase tracking-widest whitespace-nowrap"
                          >
                            {item.label}
                          </motion.span>
                        )}
                      </div>

                      <RiArrowDownSLine
                        className={`transition-all duration-300 ${isMenuOpen ? 'rotate-180' : ''} ${isSidebarCollapsed && !isMobile
                            ? 'absolute bottom-1 right-1 text-[10px] opacity-40'
                            : 'text-lg'
                          }`}
                      />

                      {isAnySubActive && isSidebarCollapsed && !isMobile && (
                        <motion.div
                          layoutId="active-pill"
                          className="absolute start-0 w-1.5 h-full bg-[var(--aurora-1)] rounded-e-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>
                    <AnimatePresence initial={false}>
                      {isMenuOpen && !isSidebarCollapsed && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="ps-4 border-l border-[var(--glass-border)] ms-6 rtl:me-6 rtl:ms-0 rtl:border-r rtl:border-l-0 overflow-hidden"
                        >
                          {item.subItems.map(subItem => renderLink(subItem, true))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return renderLink(item);
            })}
          </nav>

          {(!isSidebarCollapsed || isMobile) && (
            <div className="flex-shrink-0 pt-5">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--aurora-1)]/10 to-[var(--aurora-2)]/10 border border-[var(--glass-border)]">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <p className="text-xs font-semibold text-[var(--text-primary)]">Storage</p>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                </div>
                <div className="w-full h-1.5 bg-[var(--glass-border)] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                    initial={{ width: 0 }}
                    animate={{ width: "99.9%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <p className="mt-2 text-[10px] text-[var(--text-secondary)]">Storage usage · 99.9%</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;