import * as React from "react"
import { cva } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] text-white hover:shadow-lg hover:shadow-[var(--aurora-1)]/30 hover:-translate-y-0.5",
        blue: "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5",

        danger: "bg-rose-500 text-white hover:bg-rose-600 shadow-lg shadow-rose-500/20",
        success: "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20",
        warning: "bg-amber-500 text-white hover:bg-amber-600 shadow-lg shadow-amber-500/20",
        glass: "glass-card border border-[var(--glass-border)] text-[var(--text-primary)] hover:bg-[var(--glass-border)]",
        outline: "bg-black/20 border border-[var(--glass-border)] text-[var(--text-primary)] hover:bg-[var(--glass-border)]",
        ghost: "hover:bg-[var(--glass-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
        white: "bg-white text-zinc-900 shadow-md hover:bg-gray-100",
        dark: "bg-zinc-900 text-white shadow-md border border-zinc-700 hover:bg-black",
        zinc: "bg-zinc-800 text-white hover:bg-zinc-700 shadow-lg",
        aurora2: "bg-gradient-to-r from-[var(--aurora-2)] to-[var(--aurora-3)] text-white hover:shadow-lg hover:shadow-[var(--aurora-2)]/20 hover:opacity-90",
        aurora3: "bg-gradient-to-r from-[var(--aurora-3)] to-[var(--aurora-1)] text-white hover:shadow-lg hover:shadow-[var(--aurora-3)]/20 hover:opacity-90",
        purple: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/20 hover:opacity-90",
        orange: "bg-gradient-to-r from-rose-400 to-orange-500 text-white hover:shadow-lg hover:shadow-rose-500/20 hover:opacity-90",
      },
      size: {
        default: "px-6 py-2.5",
        sm: "px-4 py-2 text-xs",
        lg: "px-8 py-3 text-base font-bold",
        xl: "px-6 py-3 font-bold",
        icon: "w-10 h-10 p-0",
        "icon-xs": "w-8 h-8 p-0",
        "icon-sm": "w-9 h-9 p-0",
        "icon-lg": "w-12 h-12 p-0",
        "icon-xl": "w-14 h-14 p-0",
      },
      rounded: {
        default: "rounded-xl",
        full: "rounded-full",
        lg: "rounded-2xl",
        none: "rounded-none",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      rounded: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, rounded, as: Component = "button", ...props }, ref) => {
  const MotionComponent = React.useMemo(() => 
    typeof Component === 'string' ? (motion[Component] || motion.button) : motion(Component)
  , [Component]);
  
  return (
    <MotionComponent
      ref={ref}
      whileTap={{ scale: 0.98 }}
      className={cn(buttonVariants({ variant, size, rounded }), className)}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
