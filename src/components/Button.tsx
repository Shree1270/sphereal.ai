
import { cva } from "class-variance-authority";
import type { HTMLAttributes } from "react";

export type ButtonProps = {
    variant : "primary" | "secondary" | "tertiary" 
} & HTMLAttributes<HTMLButtonElement>


 
const classes = cva("text-xs font-bold rounded-lg h-10 px-6 tracking-widest ", {
  variants: {
    variant: {
      primary: "border-2 border-transparent [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_padding-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]",
      secondary: "",
      tertiary: "bg-gray-800 text-gray-200",
    },
   
    
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const Button = (props: ButtonProps) => {

    const {className = "",children, ...otherProps} = props;
  return (
    <button className={classes({className, ...otherProps})}>
        {children}
    </button>
  )
}
