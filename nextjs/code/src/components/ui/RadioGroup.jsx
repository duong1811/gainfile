import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

const RadioGroup = ({ children, className, value, onValueChange }) => {
  return (
    <div className={cn("grid gap-2", className)} role="radiogroup">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            checked: value === child.props.value,
            onChecked: () => onValueChange?.(child.props.value),
          })
        }
        return child;
      })}
    </div>
  )
}

const RadioGroupItem = React.forwardRef(({ className, value, checked, onChecked, disabled, ...props }, ref) => {
  return (
    <div
      ref={ref}
      onClick={() => !disabled && onChecked?.()}
      className={cn(
        "peer h-5 w-5 shrink-0 rounded-full border border-[var(--glass-border)] bg-black/20 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--aurora-1)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer transition-colors overflow-hidden flex items-center justify-center",
        checked && "border-[var(--aurora-1)] shadow-[0_0_10px_var(--aurora-1)]/30",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    >
      <motion.div
        initial={false}
        animate={{ scale: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="h-2.5 w-2.5 rounded-full bg-[var(--aurora-1)] shadow-[0_0_8px_var(--aurora-1)]"
      />
    </div>
  )
})
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
