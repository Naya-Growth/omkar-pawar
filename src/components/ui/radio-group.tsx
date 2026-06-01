import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "../../lib/utils";

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root ref={ref} className={cn("grid gap-3", className)} {...props} />
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      "group min-h-14 rounded-lg border border-[#1A1A1A]/8 bg-white px-4 py-2.5 text-left text-[#4E463B] shadow-sm transition-all hover:border-[#8C6A44]/45 hover:bg-[#FFF7EA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6A44] data-[state=checked]:border-[#8C6A44]/45 data-[state=checked]:bg-[#F6E4C7] data-[state=checked]:text-[#1A1A1A] md:px-5 md:py-3.5",
      className,
    )}
    {...props}
  >
    {children}
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
