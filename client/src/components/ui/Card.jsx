import React from 'react';
import { motion } from 'framer-motion';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const cardVariants = cva(
  "glass-card rounded-[1rem] border transition-all duration-300 relative",
  {
    variants: {
      variant: {
        default: "bg-[var(--glass-bg)] border-[var(--glass-border)]",
        interactive: "bg-[var(--glass-bg)] border-[var(--glass-border)] hover:bg-white/5 hover:border-[var(--aurora-1)]/50 cursor-pointer group",
        aurora: "bg-[var(--glass-bg)] border-[var(--glass-border)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--aurora-1)]/5 before:to-transparent",
        solid: "bg-black/40 backdrop-blur-xl border-[var(--glass-border)]",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
      overflow: {
        hidden: "overflow-hidden",
        visible: "overflow-visible",
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      overflow: "hidden",
    }
  }
);

const Card = React.forwardRef(({ className, variant, padding, overflow, as: Component = motion.div, ...props }, ref) => {
  return (
    <Component
      ref={ref}
      className={cn(cardVariants({ variant, padding, overflow, className }))}

      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      {...props}
    />
  );
});
Card.displayName = "Card";

const CardHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 mb-4", className)} {...props} />
);
CardHeader.displayName = "CardHeader";

const CardTitle = ({ className, ...props }) => (
  <h3 className={cn("text-2xl font-bold leading-none tracking-tight text-[var(--text-primary)]", className)} {...props} />
);
CardTitle.displayName = "CardTitle";

const CardDescription = ({ className, ...props }) => (
  <p className={cn("text-sm text-[var(--text-secondary)] font-medium", className)} {...props} />
);
CardDescription.displayName = "CardDescription";

const CardContent = ({ className, ...props }) => (
  <div className={cn("relative z-10", className)} {...props} />
);
CardContent.displayName = "CardContent";

const CardFooter = ({ className, ...props }) => (
  <div className={cn("flex items-center pt-4 mt-auto border-t border-[var(--glass-border)]", className)} {...props} />
);
CardFooter.displayName = "CardFooter";

const CardImage = ({ src, alt, className, containerClassName, ...props }) => (
  <div className={cn("relative w-full overflow-hidden", containerClassName)}>
    <img
      src={src}
      alt={alt}
      className={cn("w-full h-full object-cover transition-transform duration-700 group-hover:scale-110", className)}
      {...props}
    />
  </div>
);
CardImage.displayName = "CardImage";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardImage };
