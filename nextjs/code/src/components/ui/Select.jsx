import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { RiArrowDownSLine } from 'react-icons/ri';

const selectVariants = cva(
  "w-full bg-[var(--glass-border)] border border-[var(--glass-border)] rounded-2xl px-5 py-4 text-[var(--text-primary)] transition-all outline-none appearance-none cursor-pointer",
  {
    variants: {
      variant: {
        default: "focus:border-[var(--aurora-1)]",
        aurora1: "focus:border-[var(--aurora-1)]",
        aurora2: "focus:border-[var(--aurora-2)]",
        aurora3: "focus:border-[var(--aurora-3)]",
        blue: "focus:border-blue-400",
        emerald: "focus:border-emerald-400",
        rose: "focus:border-rose-400",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-5 py-4",
        lg: "px-6 py-5 text-lg",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    }
  }
);

export const Select = React.forwardRef(({ className, variant, size, children, ...props }, ref) => {
  return (
    <div className="relative w-full group">
      <select
        ref={ref}
        className={cn(selectVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-secondary)] group-focus-within:text-[var(--text-primary)] transition-colors">
        <RiArrowDownSLine size={20} />
      </div>
    </div>
  );
});

Select.displayName = "Select";
