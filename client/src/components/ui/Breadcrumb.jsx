import React from 'react';
import { motion } from 'framer-motion';
import { RiArrowRightSLine, RiMoreFill } from 'react-icons/ri';
import { cn } from '../../lib/utils';

const Breadcrumb = ({ className, children }) => {
  return (
    <nav 
      aria-label="breadcrumb" 
      className={cn("flex", className)}
    >
      <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm font-bold text-[var(--text-secondary)]">
        {children}
      </ol>
    </nav>
  );
};

const BreadcrumbItem = ({ className, children }) => (
  <li className={cn("inline-flex items-center gap-1.5", className)}>
    {children}
  </li>
);

const BreadcrumbLink = ({ className, children, asChild, ...props }) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      className: cn(
        "transition-colors hover:text-[var(--text-primary)] cursor-pointer",
        className,
        children.props.className
      )
    });
  }

  return (
    <span
      className={cn(
        "transition-colors hover:text-[var(--text-primary)] cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};


const BreadcrumbPage = ({ className, children }) => (
  <span
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-bold text-[var(--aurora-1)] drop-shadow-[0_0_8px_var(--aurora-1)]", className)}
  >
    {children}
  </span>
);

const BreadcrumbSeparator = ({ children, className }) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("text-[var(--text-secondary)] flex items-center justify-center opacity-50", className)}
  >
    {children || <RiArrowRightSLine className="text-lg" />}
  </li>
);

const BreadcrumbEllipsis = ({ className }) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors", className)}
  >
    <RiMoreFill className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);

export {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis
};
