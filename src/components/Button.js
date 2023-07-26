import React from "react";
import { cn } from "../utils/utils";
import { cva } from "class-variance-authority";

export const buttonVariant = cva(
  "flex py-7 px-9 justify-center items-center gap-2 rounded-2xl text-xl font-bold bg-opacity-95 hover:bg-opacity-100 w-fit",
  {
    variants: {
      variant: {
        default: "bg-yellow-teal text-[#274C5B]",
        blue: "bg-blue-teal text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Button = ({ variant, className, children, ...props }) => {
  return (
    <button className={cn(buttonVariant({ variant, className }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
