import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const inputVariants = cva(
  "w-full bg-[var(--glass-border)] border border-[var(--glass-border)] rounded-2xl px-5 py-4 text-[var(--text-primary)] transition-all outline-none placeholder:text-[var(--text-secondary)]/50",
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

export const Input = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(inputVariants({ variant, size }), className)}
      {...props}
    />
  );
});

Input.displayName = "Input";
