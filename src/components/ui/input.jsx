import React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ className, type, placeholder, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            "w-full p-3 border rounded-md focus:outline-none focus:ring-2 bg-white text-black transition duration-300 ease-in-out",
            error ? "border-red-500" : "border-gray-300",
            className
          )}
          ref={ref}
          placeholder={placeholder}
          {...props}
        />
        {error && (
          <span className="absolute text-red-500 text-sm mt-1 left-3 bottom-0">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
