import * as React from "react";

import { cn } from "../../lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-14 w-full rounded-lg border border-[#1A1A1A]/8 bg-white px-5 text-sm text-[#1A1A1A] outline-none transition-shadow placeholder:text-[#8B8680] focus:ring-2 focus:ring-[#8C6A44]",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "w-full resize-none rounded-lg border border-[#1A1A1A]/8 bg-white px-5 py-4 text-sm text-[#1A1A1A] outline-none transition-shadow placeholder:text-[#8B8680] focus:ring-2 focus:ring-[#8C6A44]",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
