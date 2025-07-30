import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-md",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
        // Brutalist variants
        brutal: "px-6 py-3 font-bold uppercase tracking-wider transition-all duration-75 hover:translate-x-1 hover:translate-y-1 active:translate-x-2 active:translate-y-2 bg-sage text-primary-foreground shadow-[8px_8px_0px_hsl(var(--sage-dark))]",
        "brutal-rose": "px-6 py-3 font-bold uppercase tracking-wider transition-all duration-75 hover:translate-x-1 hover:translate-y-1 active:translate-x-2 active:translate-y-2 bg-rose text-secondary-foreground shadow-[4px_4px_0px_hsl(var(--rose))]",
        "brutal-lavender": "px-6 py-3 font-bold uppercase tracking-wider transition-all duration-75 hover:translate-x-1 hover:translate-y-1 active:translate-x-2 active:translate-y-2 bg-lavender text-accent-foreground shadow-[6px_6px_0px_hsl(var(--lavender-dark))]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }