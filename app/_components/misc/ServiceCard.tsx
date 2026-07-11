import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ServiceCardProps = {
    children: ReactNode,
} & ComponentProps<'div'>;

const ServiceCard = ({children, className, ...props}: ServiceCardProps) => {
  return (
    <div {...props} className={twMerge('flex flex-col justify-between gap-4 md:gap-5 p-5 rounded-lg border border-[#E2E8F0CC]/80',className)} >{children}</div>
  )
}

export default ServiceCard