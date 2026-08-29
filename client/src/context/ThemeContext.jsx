"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isRTL, setIsRTL] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    // Apply dark/light class to body
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }

    // Apply RTL/LTR
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isDarkMode, isRTL]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);
  const toggleDirection = () => setIsRTL(prev => !prev);
  const toggleSidebar = () => setIsSidebarCollapsed(prev => !prev);

  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      toggleTheme,
      isRTL,
      toggleDirection,
      isSidebarCollapsed,
      toggleSidebar
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
