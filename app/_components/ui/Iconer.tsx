import { ComponentProps, ReactNode } from "react";

type IconerProps = {
    children: ReactNode;    
} & ComponentProps<"div">;

const Iconer = ({ children, className, ...props }: IconerProps) => {
  return (
    <div className={`bg-[#E5EEFF] rounded items-center justify-center flex w-8 h-8 ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Iconer