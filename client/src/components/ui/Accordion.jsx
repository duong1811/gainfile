import React, { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { RiAddLine, RiSubtractLine, RiArrowDownSLine } from 'react-icons/ri';

const AccordionContext = createContext();

const Accordion = ({ 
  type = "single", 
  collapsible = true, 
  defaultValue, 
  value, 
  onValueChange, 
  className, 
  children 
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue || (type === "multiple" ? [] : null));
  const activeValue = value !== undefined ? value : internalValue;

  const handleValueChange = (val) => {
    let newValue;
    if (type === "multiple") {
      newValue = activeValue.includes(val) 
        ? activeValue.filter(v => v !== val) 
        : [...activeValue, val];
    } else {
      newValue = activeValue === val ? (collapsible ? null : val) : val;
    }

    if (onValueChange) {
      onValueChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  return (
    <AccordionContext.Provider value={{ activeValue, onValueChange: handleValueChange, type }}>
      <div className={cn("space-y-2", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ value, className, children, ...props }) => {
  const { activeValue, type } = useContext(AccordionContext);
  const isOpen = type === "multiple" ? activeValue.includes(value) : activeValue === value;

  return (
    <div 
      className={cn(
        "border-b border-[var(--glass-border)] last:border-0 overflow-hidden transition-colors duration-300",
        isOpen && "bg-black/5",
        className
      )}
      {...props}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value, isOpen });
        }
        return child;
      })}
    </div>
  );
};

const AccordionTrigger = ({ 
  value, 
  isOpen, 
  children, 
  className, 
  icon: Icon, 
  variant = "default", // "default" or "plus-minus"
  iconClassName
}) => {
  const { onValueChange } = useContext(AccordionContext);

  return (
    <button
      onClick={() => onValueChange(value)}
      className={cn(
        "w-full flex items-center justify-between p-6 text-left transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--aurora-1)]",
        className
      )}
    >
      <div className="flex items-center gap-4">
        {Icon && (
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-all border border-[var(--glass-border)] bg-black/20",
            isOpen ? "bg-[var(--aurora-1)] text-white shadow-lg border-[var(--aurora-1)]" : "text-[var(--text-secondary)]",
            iconClassName
          )}>
            <Icon />
          </div>
        )}
        <span className={cn(
          "font-bold transition-all duration-300",
          isOpen ? "text-[var(--aurora-1)] text-lg" : "text-[var(--text-primary)]"
        )}>
          {children}
        </span>
      </div>
      
      <motion.div 
        animate={{ rotate: isOpen ? 180 : 0 }}
        className={cn(
          "flex-shrink-0 transition-all duration-300",
          variant === "plus-minus" ? (
            cn(
              "w-8 h-8 rounded-full flex items-center justify-center shadow-sm",
              isOpen ? "bg-[var(--aurora-1)] text-white scale-110" : "bg-[var(--glass-border)] text-[var(--text-primary)]"
            )
          ) : "text-[var(--text-secondary)]"
        )}
      >
        {variant === "plus-minus" ? (
          isOpen ? <RiSubtractLine /> : <RiAddLine />
        ) : <RiArrowDownSLine className="text-2xl" />}
      </motion.div>
    </button>
  );
};

const AccordionContent = ({ isOpen, children, className }) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className={cn("px-6 pb-6 text-[var(--text-secondary)] leading-relaxed text-sm", className)}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
