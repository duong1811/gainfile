import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const Progress = ({ 
  value = 0, 
  max = 100, 
  className, 
  indicatorClassName,
  variant = "default", // "default", "success", "warning", "danger", "aurora"
  showStripe = false,
  size = "md" // "xs", "sm", "md", "lg"
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const variants = {
    default: "bg-[var(--text-primary)]",
    success: "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]",
    warning: "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]",
    danger: "bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]",
    aurora: "bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] shadow-[0_0_10px_var(--aurora-1)]"
  };

  const sizes = {
    xs: "h-1",
    sm: "h-1.5",
    md: "h-3",
    lg: "h-5"
  };

  return (
    <div 
      className={cn(
        "w-full bg-black/20 rounded-full overflow-hidden border border-[var(--glass-border)] shadow-inner",
        sizes[size],
        className
      )}
    >
      <motion.div
        className={cn(
          "h-full relative rounded-full",
          variants[variant],
          indicatorClassName
        )}
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        {showStripe && (
          <div className="absolute inset-0 bg-white/20 progress-stripes animate-progress-stripe" />
        )}
      </motion.div>
    </div>
  );
};

const RadialProgress = ({
  value = 0,
  max = 100,
  size = 128,
  strokeWidth = 8,
  className,
  indicatorClassName,
  variant = "default",
  showValue = false
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const radius = (100 - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const variants = {
    default: "text-[var(--text-primary)]",
    success: "text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]",
    warning: "text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]",
    danger: "text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]",
    aurora: "text-[var(--aurora-1)] drop-shadow-[0_0_12px_var(--aurora-1)]"
  };

  return (
    <div className={cn("relative flex items-center justify-center", className)} style={{ width: size, height: size }}>
      <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
        <circle
          className="text-[var(--glass-border)] stroke-current"
          strokeWidth={strokeWidth}
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
        />
        <motion.circle
          className={cn("stroke-current", variants[variant], indicatorClassName)}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      {showValue && (
        <div className="absolute font-black text-[var(--text-primary)] tracking-tighter" style={{ fontSize: size / 4 }}>
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
};

export { Progress, RadialProgress };
