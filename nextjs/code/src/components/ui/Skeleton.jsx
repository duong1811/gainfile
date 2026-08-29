import React from 'react';
import { cn } from '../../lib/utils';

const Skeleton = ({ className, variant = "default", ...props }) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gradient-to-r from-[var(--glass-border)]/50 to-white/5",
        variant === "shimmer" && "animate-[pulse_1.5s_ease-in-out_infinite]",
        className
      )}
      {...props}
    />
  );
};

export { Skeleton };
