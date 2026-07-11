import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type CounterProps = {
    count: string,
} & ComponentProps<'div'>;

const Counter = ({count, className, ...props}: CounterProps) => {
  return (
    <div className={twMerge("bg-[#86367E] rounded-full border border-white shadow-lg min-w-8 min-h-8 max-h-8 flexcenter text-white", className)} {...props} >{count}</div>
  )
}

export default Counter