import React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        soft: "rounded-lg text-xs font-semibold border",
        interactive: "gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-[var(--glass-border)] text-[var(--text-primary)] border border-white/5 shadow-sm",
        social: "gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer border",
        dot: "rounded-full",
        overlap: "absolute -top-2 -right-2 bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg border-2 border-[var(--bg-primary)]",
        outline: "border px-3 py-1 text-xs font-bold",
        solid: "px-3 py-1 rounded-lg text-sm font-bold shadow-md text-white",
      },
      color: {
        neutral: "bg-gray-500/10 text-gray-500 border-gray-500/20",
        primary: "bg-blue-500/10 text-blue-500 border-blue-500/20",
        success: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
        warning: "bg-amber-500/10 text-amber-500 border-amber-500/20",
        danger: "bg-rose-500/10 text-rose-500 border-rose-500/20",
        info: "bg-purple-500/10 text-purple-500 border-purple-500/20",
        purple: "bg-purple-500/10 text-purple-500 border-purple-500/20",
        indigo: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
        orange: "bg-orange-500/10 text-orange-500 border-orange-500/20",
        facebook: "bg-[#1877F2]/10 text-[#1877F2] border-[#1877F2]/20 hover:bg-[#1877F2] hover:text-white",
        twitter: "bg-[#000000]/10 text-zinc-300 border-zinc-700 hover:bg-black hover:text-white",
        github: "bg-[#333]/10 text-zinc-200 border-[#333]/50 hover:bg-[#333] hover:text-white",
        online: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse",
        dnd: "bg-rose-500",
        offline: "bg-gray-500",
        avatar: "bg-emerald-500 border-2 border-[var(--bg-primary)] shadow-lg absolute top-0 right-0",
        "aurora-1": "bg-[var(--aurora-1)]/10 text-[var(--aurora-1)] border-[var(--aurora-1)]/20",
        "aurora-2": "bg-[var(--aurora-2)]/10 text-[var(--aurora-2)] border-[var(--aurora-2)]/20",
        "aurora-3": "bg-[var(--aurora-3)]/20 text-[var(--aurora-3)] border-[var(--aurora-3)]/30",
        "aurora-solid": "bg-[var(--aurora-1)]",
        glass: "bg-[var(--glass-border)] text-[var(--text-secondary)] border-[var(--glass-border)]",
        emerald: "bg-emerald-500",
        amber: "bg-amber-500",
        rose: "bg-rose-500",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      size: {
        default: "px-3 py-1",
        xs: "px-2 py-0.5 text-[10px]",
        sm: "px-2 py-1 text-xs",
        dot: "w-2.5 h-2.5",
        avatar: "w-4 h-4",
      }
    },
    defaultVariants: {
      variant: "soft",
      color: "neutral",
      size: "default",
      rounded: "lg",
    },
    compoundVariants: [
      {
        variant: "dot",
        size: "default",
        className: "w-2.5 h-2.5"
      },
      {
        variant: "overlap",
        className: "px-2 py-0.5"
      }
    ]
  }
)

function Badge({ className, variant, color, size, rounded, ...props }) {
  return (
    <span className={cn(badgeVariants({ variant, color, size, rounded }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
