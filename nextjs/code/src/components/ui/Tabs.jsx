import React, { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

const TabsContext = createContext();

const Tabs = ({ defaultValue, value, onValueChange, orientation = "horizontal", variant = "underline", className, children }) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const activeValue = value !== undefined ? value : internalValue;

  const handleValueChange = (newValue) => {
    if (onValueChange) {
      onValueChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  return (
    <TabsContext.Provider value={{ activeValue, onValueChange: handleValueChange, orientation, variant }}>
      <div className={cn(
        "flex",
        orientation === "vertical" ? "flex-col md:flex-row gap-8" : "flex-col",
        className
      )}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ className, children }) => {
  const { orientation, variant } = useContext(TabsContext);
  return (
    <div className={cn(
      "flex shrink-0",
      orientation === "vertical" ? "flex-col w-full md:w-64 space-y-2" : "flex-row",
      variant === "underline" && orientation === "horizontal" && "border-b border-[var(--glass-border)] gap-8 overflow-x-auto no-scrollbar",
      variant === "pill" && "bg-black/40 p-1.5 rounded-2xl border border-[var(--glass-border)] relative inline-flex",
      className
    )}>
      {children}
    </div>
  );
};

const TabsTrigger = ({ value, children, className, icon: Icon }) => {
  const { activeValue, onValueChange, orientation, variant } = useContext(TabsContext);
  const isActive = activeValue === value;

  return (
    <button
      onClick={() => onValueChange(value)}
      className={cn(
        "relative transition-all duration-300 flex items-center justify-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-[var(--aurora-1)] rounded-xl",
        // Underline Variant
        variant === "underline" && orientation === "horizontal" && cn(
          "pb-4 text-sm font-bold whitespace-nowrap px-1",
          isActive ? "text-[var(--aurora-1)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        ),
        // Pill Variant
        variant === "pill" && cn(
          "px-6 py-2 text-sm font-bold rounded-xl relative z-10 min-w-[100px]",
          isActive ? "text-white" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        ),
        // Vertical / Sidebar Variant
        orientation === "vertical" && cn(
          "justify-start px-4 py-3 rounded-2xl text-left font-bold text-sm w-full",
          isActive 
            ? "bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] text-white shadow-lg" 
            : "bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--aurora-1)]"
        ),
        className
      )}
    >
      {Icon && <Icon className={cn("shrink-0", variant === "pill" ? "text-lg" : "text-xl")} />}
      <span className="relative z-10">{children}</span>
      
      {/* Visual Indicators */}
      {isActive && variant === "underline" && orientation === "horizontal" && (
        <motion.div 
          layoutId="underline" 
          className="absolute left-0 right-0 bottom-0 h-[3px] bg-[var(--aurora-1)] rounded-t-full" 
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      
      {isActive && variant === "pill" && (
        <motion.div 
          layoutId="pill-bg" 
          className="absolute inset-0 bg-zinc-800 border border-zinc-600 rounded-xl -z-0 shadow-lg" 
          transition={{ type: "spring", stiffness: 300, damping: 25 }} 
        />
      )}
    </button>
  );
};

const TabsContent = ({ value, children, className, forceMount }) => {
  const { activeValue } = useContext(TabsContext);
  const isActive = activeValue === value;

  if (!isActive && !forceMount) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={cn("flex-1 outline-none", className)}
    >
      {children}
    </motion.div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
