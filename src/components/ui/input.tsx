import * as React from "react";

import { cn } from "../../lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-14 w-full rounded-full border border-[#262421]/8 bg-white px-5 text-sm text-[#262421] outline-none transition-shadow placeholder:text-[#8B8680] focus:ring-2 focus:ring-[#53665A]",
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
      "w-full resize-none rounded-[1.5rem] border border-[#262421]/8 bg-white px-5 py-4 text-sm text-[#262421] outline-none transition-shadow placeholder:text-[#8B8680] focus:ring-2 focus:ring-[#53665A]",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
