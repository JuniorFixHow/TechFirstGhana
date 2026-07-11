import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type IconerProps = {
    icon: ReactNode
} & ComponentProps<'div'>;
const Iconer = ({ icon, className, ...props }: IconerProps) => {
  return (
    <div className={twMerge('flexcenter rounded h-8 w-8 bg-[#E5EEFF]', className)} {...props}>
      {icon}
    </div>
  )
}

export default Iconer