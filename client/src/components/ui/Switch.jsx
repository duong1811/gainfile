import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const Switch = ({ checked, onChange, variant = "default", className }) => {
  const bgColors = {
    default: checked ? 'bg-orange-500' : 'bg-[var(--glass-border)]',
    blue: checked ? 'bg-blue-500' : 'bg-[var(--glass-border)]',
    emerald: checked ? 'bg-emerald-500' : 'bg-[var(--glass-border)]',
    aurora: checked ? 'bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)]' : 'bg-[var(--glass-border)]',
  };

  return (
    <div 
      className={cn(
        "w-12 h-6 rounded-full cursor-pointer flex items-center px-1 transition-colors duration-300",
        bgColors[variant],
        className
      )} 
      onClick={() => onChange(!checked)}
    >
      <motion.div 
        className="w-5 h-5 rounded-full bg-white shadow-sm" 
        animate={{ x: checked ? 20 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </div>
  );
};
