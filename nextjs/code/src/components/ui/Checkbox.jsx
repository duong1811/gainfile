import * as React from "react"
import { motion } from "framer-motion"
import { RiCheckLine } from "react-icons/ri"
import { cn } from "../../lib/utils"

const Checkbox = React.forwardRef(({ className, checked, onCheckedChange, disabled, ...props }, ref) => {
  return (
    <div
      ref={ref}
      onClick={() => !disabled && onCheckedChange?.(!checked)}
      className={cn(
        "peer h-5 w-5 shrink-0 rounded border border-[var(--glass-border)] bg-black/20 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--aurora-1)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer transition-colors overflow-hidden flex items-center justify-center group",
        checked && "bg-[var(--aurora-1)] border-[var(--aurora-1)] text-white shadow-[0_0_10px_var(--aurora-1)]",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    >
      <motion.div
        initial={false}
        animate={{ scale: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <RiCheckLine className="h-3.5 w-3.5 stroke-[2]" />
      </motion.div>
    </div>
  )
})
Checkbox.displayName = "Checkbox"

export { Checkbox }
