import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

const Tooltip = ({ 
  children, 
  content, 
  position = 'top', 
  className,
  contentClassName,
  delay = 0,
  showArrow = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  const getPositionClasses = () => {
    switch(position) {
      case 'top': return 'bottom-full left-1/2 -translate-x-1/2 mb-3';
      case 'bottom': return 'top-full left-1/2 -translate-x-1/2 mt-3';
      case 'left': return 'right-full top-1/2 -translate-y-1/2 mr-3';
      case 'right': return 'left-full top-1/2 -translate-y-1/2 ml-3';
      default: return 'bottom-full left-1/2 -translate-x-1/2 mb-3';
    }
  };

  const animationVariants = {
    top: { initial: { opacity: 0, scale: 0.95, y: 10 }, animate: { opacity: 1, scale: 1, y: 0 } },
    bottom: { initial: { opacity: 0, scale: 0.95, y: -10 }, animate: { opacity: 1, scale: 1, y: 0 } },
    left: { initial: { opacity: 0, scale: 0.95, x: 10 }, animate: { opacity: 1, scale: 1, x: 0 } },
    right: { initial: { opacity: 0, scale: 0.95, x: -10 }, animate: { opacity: 1, scale: 1, x: 0 } }
  };

  return (
    <div 
      className={cn("relative inline-block", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={animationVariants[position].initial}
            animate={animationVariants[position].animate}
            exit={animationVariants[position].initial}
            transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 20 }}
            className={cn("absolute z-50 pointer-events-none", getPositionClasses())}
          >
            <div className={cn(
              "px-3 py-2 text-xs font-bold tracking-wide text-white bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl",
              typeof content !== 'string' && "p-4 rounded-xl w-64", // Card-like for complex content
              contentClassName
            )}>
              {content}
            </div>
            
            {showArrow && (
              <div className={cn(
                "absolute w-2 h-2 bg-zinc-900/90 rotate-45 border border-white/10 -z-10",
                position === 'top' && "bottom-[-5px] left-1/2 -translate-x-1/2 border-t-0 border-l-0",
                position === 'bottom' && "top-[-5px] left-1/2 -translate-x-1/2 border-b-0 border-r-0",
                position === 'left' && "right-[-5px] top-1/2 -translate-y-1/2 border-b-0 border-l-0",
                position === 'right' && "left-[-5px] top-1/2 -translate-y-1/2 border-t-0 border-r-0"
              )} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Tooltip };
