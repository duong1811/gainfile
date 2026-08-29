import * as React from "react"
import { cva } from "class-variance-authority"
import { motion } from "framer-motion"
import { RiCloseLine } from "react-icons/ri"
import { cn } from "../../lib/utils"

const alertVariants = cva(
  "relative w-full rounded-xl p-4 flex items-start gap-4 border transition-all",
  {
    variants: {
      variant: {
        soft: "border",
        solid: "text-white border-transparent shadow-lg",
        aurora: "text-white border-white/20 shadow-lg bg-gradient-to-r from-[var(--aurora-1)] via-[var(--aurora-2)] to-[var(--aurora-3)]",
      },
      color: {
        info: "",
        success: "",
        warning: "",
        error: "",
        aurora: "",
      },
    },
    compoundVariants: [
      // Soft variants
      { variant: "soft", color: "info", className: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
      { variant: "soft", color: "success", className: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
      { variant: "soft", color: "warning", className: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
      { variant: "soft", color: "error", className: "bg-rose-500/10 text-rose-500 border-rose-500/20" },
      // Solid variants
      { variant: "solid", color: "info", className: "bg-blue-500 shadow-blue-500/20" },
      { variant: "solid", color: "success", className: "bg-emerald-500 shadow-emerald-500/20" },
      { variant: "solid", color: "warning", className: "bg-amber-500 shadow-amber-500/20" },
      { variant: "solid", color: "error", className: "bg-rose-500 shadow-rose-500/20" },
    ],
    defaultVariants: {
      variant: "soft",
      color: "info",
    },
  }
)

const Alert = React.forwardRef(({ className, variant, color, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      role="alert"
      className={cn(alertVariants({ variant, color }), className)}
      {...props}
    />
  )
})
Alert.displayName = "Alert"

const AlertIcon = ({ className, ...props }) => (
  <div className={cn("flex-shrink-0 mt-0.5", className)} {...props} />
)
AlertIcon.displayName = "AlertIcon"

const AlertTitle = ({ className, ...props }) => (
  <h5 className={cn("font-semibold text-sm mb-1 leading-none tracking-tight", className)} {...props} />
)
AlertTitle.displayName = "AlertTitle"

const AlertDescription = ({ className, ...props }) => (
  <div className={cn("text-xs leading-relaxed opacity-90", className)} {...props} />
)
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription, AlertIcon, alertVariants }
