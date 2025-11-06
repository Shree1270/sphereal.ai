import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const SectionBorder = (props : HTMLAttributes<HTMLDivElement>) => {
    const {className, ...otherProps} = props;
  return (
    <div className={twMerge("border-l border-r border-gray-200/20", className,
    )} 
    {...otherProps}
    />
  )
}
