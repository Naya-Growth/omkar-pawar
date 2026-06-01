import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex min-w-0 max-w-full cursor-pointer items-center justify-center gap-2 whitespace-normal rounded-full text-center text-sm font-bold leading-5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6A44] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#8C6A44] text-white shadow-[0_14px_32px_rgba(140,106,68,0.24)] hover:bg-[#765636]",
        secondary:
          "border border-[#8C6A44]/18 bg-white/90 text-[#1A1A1A] shadow-sm hover:border-[#8C6A44]/45 hover:text-[#8C6A44]",
        ghost: "text-[#1A1A1A] hover:bg-[#F2E4CE]",
        inverted: "bg-white text-[#1A1A1A] hover:bg-[#EBC85B]",
        instagram:
          "border border-[#A37F51]/20 bg-[#FFF7EA] text-[#8C6A44] hover:border-[#A37F51]/40 hover:bg-[#F6E4C7]",
      },
      size: {
        sm: "min-h-10 px-4 py-2 text-xs tracking-[0.08em]",
        md: "min-h-12 px-6 py-3 tracking-[0.08em]",
        lg: "min-h-14 px-7 py-3.5 tracking-[0.08em] sm:px-8",
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
