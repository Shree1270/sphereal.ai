
import { cva } from "class-variance-authority";
import type { HTMLAttributes } from "react";

export type ButtonProps = {
    variant ?: "primary" | "secondary" | "tertiary" ,
    block ?: boolean
} & HTMLAttributes<HTMLButtonElement>


 
const classes = cva("text-xs font-bold rounded-lg h-10 px-6 tracking-widest ", {
  variants: {
    block :{
        true : "w-full",
    },
    variant: {
      primary: "border-gradient",
      secondary: "bg-gray-100 text-gray-900",
      tertiary: "bg-gray-800 text-gray-200",
    },
   
    
  },
  defaultVariants: {
    variant: "primary",
    block: false,
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
