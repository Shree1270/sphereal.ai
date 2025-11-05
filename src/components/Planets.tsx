import { cva } from "class-variance-authority";
import type { HTMLAttributes } from "react";

export const classes = cva("bg-linear-to-b  to-gray-900 rounded-full",{

    variants:{
        size : {
            sm: "",
            md: "",
            lg: "size-8",
        },
        color : {
            violet : "from-violet-400",
            fuchsia: "",
            teal: "",
        }
    },
    defaultVariants : {
        size : "lg",
        color : "violet",
    }
})

export const Planets = (props:{
    size?: 'sm' | 'md' | 'lg' ;
    color?: 'violet' | 'fuchsia' | 'teal';
    
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={classes({
        size : props.size,
        color : props.color,
        className : props.className,
    })}>
        
    </div>
  )
}
