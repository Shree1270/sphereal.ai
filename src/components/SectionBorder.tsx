import { Plus } from "lucide-react";
import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const SectionBorder = (props : {borderTop ?: boolean } & HTMLAttributes<HTMLDivElement>) => {
    const {className,children,borderTop, ...otherProps} = props;
  return (
    <div className={twMerge("relative border-l border-r border-gray-200/20", className,
     borderTop && "border-t" ,)} 
    {...otherProps}
    >
    {borderTop && (
      <>
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
        <Plus className="text-gray-100 font-bold size-4"/>
      </div>

      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
        <Plus className="text-gray-100 font-bold size-4"/>
      </div>
      
      </>
    )}
    {children}
    </div>
  )
}
