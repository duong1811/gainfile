import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const textareaVariants = cva(
  "w-full bg-[var(--glass-border)] border border-[var(--glass-border)] rounded-2xl px-5 py-4 text-[var(--text-primary)] transition-all outline-none placeholder:text-[var(--text-secondary)]/50 resize-none",
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

export const Textarea = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(textareaVariants({ variant, size }), className)}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
