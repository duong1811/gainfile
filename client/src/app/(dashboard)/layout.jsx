"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import Sidebar from '@/components/Sidebar';
import HorizontalMenu from '@/components/HorizontalMenu';
import Topbar from '@/components/Topbar';
import Bottombar from '@/components/Footer';

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isSidebarCollapsed, isRTL } = useTheme();
  const isHorizontalMenu = process.env.NEXT_PUBLIC_NAVIGATION_MODE !== 'sidebar';

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`${!isHorizontalMenu && sidebarOpen ? 'sidebar-open' : ''} ${!isHorizontalMenu && isSidebarCollapsed ? 'sidebar-collapsed' : ''}`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="aurora-bg" />
      {!isHorizontalMenu && <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />}
      
      <motion.main 
        className="main-content flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {isHorizontalMenu ? (
          <Topbar isHorizontalMenu>
            <HorizontalMenu />
          </Topbar>
        ) : (
          <Topbar />
        )}
        <div className="min-w-0 flex-1 container mx-auto">
          {children}
        </div>
        <Bottombar />
      </motion.main>
    </div>
  );
}
