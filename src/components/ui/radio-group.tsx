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
      "group rounded-[1.15rem] border border-[#262421]/8 bg-white px-4 py-2.5 text-left text-[#485364] shadow-sm transition-all hover:border-[#9A7B65]/45 hover:bg-[#FFFBF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#53665A] data-[state=checked]:border-[#53665A]/40 data-[state=checked]:bg-[#EEF3EC] data-[state=checked]:text-[#262421] md:rounded-[1.35rem] md:px-5 md:py-4",
      className,
    )}
    {...props}
  >
    {children}
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
