import React from 'react';
import { motion } from 'framer-motion';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { cn } from '../../lib/utils';

const Pagination = ({ className, children }) => {
  return (
    <nav 
      role="navigation" 
      aria-label="pagination" 
      className={cn("flex items-center gap-1 bg-[var(--glass-bg)] p-1.5 rounded-2xl shadow-inner border border-[var(--glass-border)]", className)}
    >
      {children}
    </nav>
  );
};

const PaginationContent = ({ className, children }) => (
  <div className={cn("flex flex-row items-center gap-1", className)}>
    {children}
  </div>
);

const PaginationItem = ({ className, children }) => (
  <div className={cn("", className)}>
    {children}
  </div>
);

const PaginationLink = ({ 
  isActive, 
  children, 
  className, 
  onClick, 
  disabled,
  ...props 
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all relative z-10 outline-none focus-visible:ring-2 focus-visible:ring-[var(--aurora-1)]",
      isActive 
        ? "text-[var(--bg-primary)] shadow-lg" 
        : "text-[var(--text-secondary)] hover:bg-[var(--glass-border)] hover:text-[var(--text-primary)] disabled:opacity-30 disabled:cursor-not-allowed",
      className
    )}
    {...props}
  >
    {isActive && (
      <motion.div 
        layoutId="active-pagination-bg" 
        className="absolute inset-0 bg-[var(--text-primary)] rounded-xl -z-10 shadow-lg" 
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    )}
    <span>{children}</span>
  </button>
);

const PaginationPrevious = ({ onClick, disabled, className }) => (
  <PaginationLink
    aria-label="Go to previous page"
    onClick={onClick}
    disabled={disabled}
    className={cn("", className)}
  >
    <RiArrowLeftSLine className="text-2xl" />
  </PaginationLink>
);

const PaginationNext = ({ onClick, disabled, className }) => (
  <PaginationLink
    aria-label="Go to next page"
    onClick={onClick}
    disabled={disabled}
    className={cn("", className)}
  >
    <RiArrowRightSLine className="text-2xl" />
  </PaginationLink>
);

const PaginationEllipsis = ({ className }) => (
  <div className={cn("w-10 h-10 flex items-center justify-center text-[var(--text-secondary)]", className)}>
    <span className="font-bold">...</span>
  </div>
);

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis
};
