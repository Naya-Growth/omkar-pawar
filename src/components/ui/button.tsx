import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#53665A] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#262421] text-white shadow-[0_14px_32px_rgba(38,36,33,0.18)] hover:bg-[#53665A]",
        secondary:
          "border border-[#262421]/10 bg-white/90 text-[#262421] shadow-sm hover:border-[#53665A]/35 hover:text-[#53665A]",
        ghost: "text-[#262421] hover:bg-[#F1E9DD]",
        inverted: "bg-white text-[#262421] hover:bg-[#DCC7A7]",
        instagram:
          "border border-[#C77D74]/20 bg-[#FFF6F2] text-[#8B4E49] hover:border-[#C77D74]/40 hover:bg-[#FFEDE7]",
      },
      size: {
        sm: "h-10 px-4 text-xs tracking-[0.08em]",
        md: "h-12 px-6 tracking-[0.08em]",
        lg: "h-14 px-7 tracking-[0.08em] sm:px-8",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
