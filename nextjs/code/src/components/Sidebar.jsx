import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RiDashboardLine,
  RiCheckboxCircleLine,
  RiStarLine,
  RiWalletLine,
  RiTimeLine,
  RiMenuLine,
  RiCloseLine,
  RiFireLine,
  RiBarChartBoxLine,
  RiCalendarEventLine,
  RiBookmarkLine,
  RiSettings4Line,
  RiDatabase2Line,
  RiNotification3Line,
  RiMessage3Line,
  RiTeamLine,
  RiFileTextLine,
  RiPlugLine,
  RiArrowDownSLine,
  RiFlowChart,
  RiFolder2Line,
  RiTaskLine,
  RiBookReadLine,
  RiBankCardLine,
  RiShieldCheckLine,
  RiKey2Line,
  RiCustomerService2Line,
  RiQuestionAnswerLine,
  RiHistoryLine,
  RiUserStarLine,
  RiBriefcase4Line,
  RiStackLine,
  RiRobotLine,
  RiAppsLine,
  RiFocus2Line,
  RiHeartPulseLine,
  RiExchangeDollarLine
} from 'react-icons/ri';

import { useTheme } from '../context/ThemeContext';

const menuItems = [
  { path: '/dashboard', icon: RiDashboardLine, label: 'Dashboard' },
  {
    label: 'Core Trackers', icon: RiFlowChart,
    subItems: [
      { path: '/habits', icon: RiCheckboxCircleLine, label: 'Habits' },
      { path: '/goals', icon: RiStarLine, label: 'Goals' },
      { path: '/expenses', icon: RiWalletLine, label: 'Expenses' },
      { path: '/time', icon: RiTimeLine, label: 'Time Tracker' },
      { path: '/wellness', icon: RiHeartPulseLine, label: 'Wellness' },
    ]
  },
  { path: '/analytics', icon: RiBarChartBoxLine, label: 'Analytics' },
  { path: '/calendar', icon: RiCalendarEventLine, label: 'Calendar' },
  {
    label: 'Productivity', icon: RiBriefcase4Line,
    subItems: [
      { path: '/projects', icon: RiFolder2Line, label: 'Projects' },
      { path: '/tasks', icon: RiTaskLine, label: 'Tasks' },
      { path: '/documents', icon: RiBookReadLine, label: 'Documents' },
      { path: '/roadmap', icon: RiFlowChart, label: 'Roadmap' },
      { path: '/file-manager', icon: RiFolder2Line, label: 'File Manager' },
      { path: '/idea-bank', icon: RiFileTextLine, label: 'Idea Bank' },
      { path: '/ai-insights', icon: RiRobotLine, label: 'AI Insights' },
      { path: '/knowledge-base', icon: RiBookReadLine, label: 'Knowledge Base' },
      { path: '/focus-room', icon: RiFocus2Line, label: 'Focus Room' },
    ]
  },
  {
    label: 'Organization', icon: RiTeamLine,
    subItems: [
      { path: '/team', icon: RiTeamLine, label: 'Team Directory' },
      { path: '/users', icon: RiUserStarLine, label: 'User Roles' },
      { path: '/contacts', icon: RiTeamLine, label: 'Contacts' },
      { path: '/messages', icon: RiMessage3Line, label: 'Messages' },
      { path: '/notifications', icon: RiNotification3Line, label: 'Notifications' },
      { path: '/meetings', icon: RiTeamLine, label: 'Meetings' },
      { path: '/discussions', icon: RiMessage3Line, label: 'Discussions' },
      { path: '/time-off', icon: RiCalendarEventLine, label: 'Time Off' },
      { path: '/performance', icon: RiBarChartBoxLine, label: 'Performance' },
    ]
  },
  {
    label: 'Business', icon: RiStackLine,
    subItems: [
      { path: '/deals', icon: RiBankCardLine, label: 'Deals/CRM' },
      { path: '/contracts', icon: RiFileTextLine, label: 'Contracts' },
      { path: '/invoices', icon: RiBankCardLine, label: 'Invoices' },
      { path: '/billing', icon: RiBankCardLine, label: 'Billing' },
      { path: '/campaigns', icon: RiStackLine, label: 'Campaigns' },
      { path: '/assets', icon: RiDatabase2Line, label: 'IT Assets' },
      { path: '/support', icon: RiCustomerService2Line, label: 'Help Desk' },
      { path: '/faq', icon: RiQuestionAnswerLine, label: 'F.A.Q' },
      { path: '/marketplace', icon: RiAppsLine, label: 'Marketplace' },
      { path: '/investments', icon: RiExchangeDollarLine, label: 'Investments' },
    ]
  },
  {
    label: 'System', icon: RiSettings4Line,
    subItems: [
      { path: '/changelog', icon: RiHistoryLine, label: 'Changelog' },
      { path: '/reports', icon: RiFileTextLine, label: 'Reports' },
      { path: '/activity', icon: RiHistoryLine, label: 'Activity Log' },
      { path: '/automations', icon: RiSettings4Line, label: 'Automations' },
      { path: '/integrations', icon: RiPlugLine, label: 'Integrations' },
      { path: '/security', icon: RiShieldCheckLine, label: 'Security' },
      { path: '/api-keys', icon: RiKey2Line, label: 'API Keys' },
    ]
  },
  {
    label: 'Authentication', icon: RiShieldCheckLine,
    subItems: [
      { path: '/login', icon: RiKey2Line, label: 'Login' },
      { path: '/register', icon: RiUserStarLine, label: 'Register' },
      { path: '/pricing', icon: RiBankCardLine, label: 'Pricing' },
      { path: '/', icon: RiDashboardLine, label: 'Landing Page' },
    ]
  },
  {
    label: 'UI Components', icon: RiDatabase2Line,
    subItems: [
      { path: '/ui/alerts', icon: RiNotification3Line, label: 'Alerts' },
      { path: '/ui/badges', icon: RiBookmarkLine, label: 'Badges' },
      { path: '/ui/buttons', icon: RiCheckboxCircleLine, label: 'Buttons' },
      { path: '/ui/cards', icon: RiDashboardLine, label: 'Cards' },
      { path: '/ui/modals', icon: RiBookReadLine, label: 'Modals' },
      { path: '/ui/forms', icon: RiFileTextLine, label: 'Forms' },
      { path: '/ui/tables', icon: RiDatabase2Line, label: 'Tables' },
      { path: '/ui/tabs', icon: RiStackLine, label: 'Tabs' },
      { path: '/ui/accordions', icon: RiMenuLine, label: 'Accordions' },
      { path: '/ui/tooltips', icon: RiMessage3Line, label: 'Tooltips' },
      { path: '/ui/progress', icon: RiTimeLine, label: 'Progress Bars' },
      { path: '/ui/dropdowns', icon: RiArrowDownSLine, label: 'Dropdowns' },
      { path: '/ui/pagination', icon: RiHistoryLine, label: 'Pagination' },
      { path: '/ui/breadcrumbs', icon: RiFlowChart, label: 'Breadcrumbs' },
      { path: '/ui/typography', icon: RiFileTextLine, label: 'Typography' },
    ]
  },
  { path: '/settings', icon: RiSettings4Line, label: 'Settings' },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const location = { pathname };
  const { isSidebarCollapsed, toggleSidebar, isRTL } = useTheme();
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (label) => {
    setOpenMenus(prev => ({ ...prev, [label]: !prev[label] }));
  };

  useEffect(() => {
    setOpenMenus(prev => {
      const next = { ...prev };
      let changed = false;
      menuItems.forEach(item => {
        if (item.subItems) {
          const isAnySubActive = item.subItems.some(sub => location.pathname === sub.path);
          if (next[item.label] !== isAnySubActive) {
            next[item.label] = isAnySubActive;
            changed = true;
          }
        }
      });
      return changed ? next : prev;
    });

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
        className="fixed top-0 start-0 h-screen glass-card border-e border-[var(--glass-border)] z-[1000] overflow-y-auto no-scrollbar"
        variants={sidebarVariants}
        initial={isMobile ? "closed" : "open"}
        animate={isMobile ? (isOpen ? "open" : "closed") : "open"}
      >
        <div className={`p-6 ${isSidebarCollapsed && !isMobile ? 'px-0 flex flex-col items-center' : ''}`}>
          <div className={`flex items-center gap-3 mb-10 ${isSidebarCollapsed && !isMobile ? 'justify-center' : ''}`}>
            <div className="w-10 h-10 min-w-[40px] rounded-xl bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] flex items-center justify-center shadow-lg">
              <RiFireLine className="text-white text-2xl" />
            </div>
            {(!isSidebarCollapsed || isMobile) && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)] leading-none">Trackify</h2>
                <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-[0.2em] font-semibold mt-1">Core System</p>
              </motion.div>
            )}
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => {
              if (item.subItems) {
                const isMenuOpen = openMenus[item.label] || false;
                const isAnySubActive = item.subItems.some(sub => location.pathname === sub.path);

                return (
                  <div key={item.label} className="overflow-hidden">
                    <motion.button
                      onClick={() => {
                        if (isSidebarCollapsed) toggleSidebar();
                        toggleMenu(item.label);
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
            <div className="mt-8 mb-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--aurora-1)]/10 to-[var(--aurora-2)]/10 border border-[var(--glass-border)]">
                <p className="text-xs text-[var(--text-secondary)] mb-3">System Healthy</p>
                <div className="w-full h-1.5 bg-[var(--glass-border)] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[var(--aurora-1)]"
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;