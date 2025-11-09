
import { cva } from "class-variance-authority";
import { useEffect, useState, type HTMLAttributes } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { animate } from "motion";

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

    const [isHovered, setIsHovered] = useState(false);

    const {className = "",children, ...otherProps} = props;
    const angle = useMotionValue(45);
    const background = useMotionTemplate`linear-gradient(var(--color-gray-950),var(--color-gray-950)) padding-box, conic-gradient(from ${angle}deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400)) border-box`

    useEffect(()=>{
      if(isHovered){
        animate(angle, angle.get() + 360, {
          duration: 1,
          ease: "linear",
          repeat: Infinity
        });
      } else {
        animate(angle, 45, { duration:0.5 })
      }
    }, [isHovered, angle])

  return (
    <motion.button className={classes({className, ...otherProps})}
      onMouseEnter={()=> setIsHovered(true)}
      onMouseLeave={()=> setIsHovered(false)}
      style = {props.variant === "primary" ? {background : background} : undefined}
    >
        {children}
    </motion.button>
  )
}
