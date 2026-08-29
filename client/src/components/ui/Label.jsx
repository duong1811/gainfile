import React from 'react';
import { cn } from '../../lib/utils';

export const Label = ({ className, children, ...props }) => {
  return (
    <label
      className={cn(
        "text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest block mb-2 px-1",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};
