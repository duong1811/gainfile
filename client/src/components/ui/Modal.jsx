import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine } from 'react-icons/ri';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const modalVariants = cva(
  "relative w-full overflow-hidden transition-all duration-300",
  {
    variants: {
      size: {
        xs: "max-w-xs",
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        full: "max-w-[95vw] h-[90vh]",
      },
      variant: {
        glass: "glass-card bg-[var(--bg-primary)] border-[var(--glass-border)] shadow-2xl rounded-[2.5rem]",
        aurora: "glass-card bg-[var(--bg-primary)] border-[var(--aurora-1)]/30 shadow-[var(--aurora-1)]/10 shadow-2xl rounded-[2.5rem]",
      }
    },
    defaultVariants: {
      size: "md",
      variant: "glass",
    }
  }
);

export const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  title, 
  size, 
  variant, 
  className,
  showClose = true,
  closeOnOutsideClick = true
}) => {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOnOutsideClick ? onClose : undefined}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(modalVariants({ size, variant }), className)}
          >
            {/* Top Aurora Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)]" />

            {/* Header */}
            {(title || showClose) && (
              <div className="flex items-center justify-between p-4">
                {title && (
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                    {title}
                  </h3>
                )}
                {showClose && (
                  <button
                    onClick={onClose}
                    className="p-2 rounded-xl bg-[var(--glass-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-border)]/80 transition-all active:scale-95 ml-auto"
                  >
                    <RiCloseLine size={24} />
                  </button>
                )}
              </div>
            )}

            {/* Content */}
            <div className="p-4">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const ModalHeader = ({ children, className }) => (
  <div className={cn("mb-6", className)}>
    {children}
  </div>
);

export const ModalBody = ({ children, className }) => (
  <div className={cn("space-y-4", className)}>
    {children}
  </div>
);

export const ModalFooter = ({ children, className }) => (
  <div className={cn("flex gap-4 mt-8", className)}>
    {children}
  </div>
);
