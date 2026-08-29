import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { RiArrowDownSLine } from 'react-icons/ri';

const DropdownContext = createContext();

const Dropdown = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div 
        ref={containerRef} 
        className={cn(
          "relative inline-block text-left", 
          isOpen ? "z-[100]" : "z-10",
          className
        )}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

const DropdownTrigger = ({ children, className, asChild = false, showChevron = true }) => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);

  if (asChild) {
    return React.cloneElement(children, {
      onClick: (e) => {
        if (children.props.onClick) children.props.onClick(e);
        setIsOpen(!isOpen);
      },
      'aria-expanded': isOpen
    });
  }

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "inline-flex justify-between items-center px-5 py-3 text-sm font-bold rounded-xl transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--aurora-1)]",
        className
      )}
    >
      {children}
      {showChevron && (
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="ml-2 -mr-1"
        >
          <RiArrowDownSLine className="text-lg" />
        </motion.span>
      )}
    </button>
  );
};

const DropdownContent = ({
  children,
  className,
  align = 'left', // 'left', 'right', 'center'
  width = 'w-56',
  offset = 'mt-2'
}) => {
  const { isOpen } = useContext(DropdownContext);

  const alignClasses = {
    left: 'left-0 origin-top-left',
    right: 'right-0 origin-top-right',
    center: 'left-1/2 -translate-x-1/2 origin-top'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn(
            "absolute overflow-hidden bg-[var(--dropdown-bg)] backdrop-blur-xl border border-[var(--dropdown-border)] rounded-2xl shadow-2xl z-[1000]",
            alignClasses[align],
            width,
            offset,
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DropdownItem = ({ children, onClick, className, variant = 'default', closeOnSelect = true }) => {
  const { setIsOpen } = useContext(DropdownContext);

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (closeOnSelect) setIsOpen(false);
  };

  const variants = {
    default: "text-[var(--text-primary)] hover:bg-[var(--dropdown-hover)]",
    danger: "text-rose-500 hover:bg-rose-500/10",
    success: "text-emerald-500 hover:bg-emerald-500/10"
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex items-center w-full px-4 py-2.5 text-sm font-medium transition-colors text-left",
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

const DropdownSeparator = ({ className }) => (
  <div className={cn("h-px bg-[var(--dropdown-separator)] my-1", className)} />
);

const DropdownHeader = ({ children, className }) => (
  <div className={cn("px-4 py-3 bg-gradient-to-br from-[var(--aurora-1)]/10 to-transparent border-b border-[var(--dropdown-separator)]", className)}>
    {children}
  </div>
);

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownHeader
};
