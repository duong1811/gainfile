"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import Bottombar from '@/components/Bottombar';

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isSidebarCollapsed, isRTL } = useTheme();

  useEffect(() => {
    // Set initial state based on window width
    setSidebarOpen(window.innerWidth > 768);
    
    const handleResize = () => {
      // Auto-open sidebar when moving from mobile to desktop
      if (window.innerWidth > 768) {
        setSidebarOpen(true);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`app-container ${sidebarOpen ? 'sidebar-open' : ''} ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="aurora-bg" />
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <motion.main 
        className="main-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Topbar />
        {children}
        <Bottombar />
      </motion.main>
    </div>
  );
}
