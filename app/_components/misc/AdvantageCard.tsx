import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Iconer from "./Iconer";
import Text from "../ui/Text";

type AdvantageCardProps = {
  title: string,
  text: string,
  icon?: ReactNode,
  iconerClass?: string,
  hasLine?: boolean,
  bottomComponent?: ReactNode,
  titleClass?: string,
  textClass?: string,
} & ComponentProps<'div'>;

const AdvantageCard = ({ title, text, icon, iconerClass, hasLine=false, bottomComponent, titleClass, textClass, className, ...props }: AdvantageCardProps) => {
  return (
    <div className={twMerge('flex flex-col gap-3 p-5 bg-white border border-[#C4C6CE] rounded-lg', className)} {...props} >
      <Iconer icon={icon} className={iconerClass} />
      <div className="flex flex-col gap-1.5">
        <Text className={titleClass} text={title} type="heavytext" color="black" />
        <Text className={textClass} text={text} type="base" color="grey" />
      </div>
      {
        hasLine &&
        <hr className='border-gray-200 w-full' />
      }
      {
        bottomComponent &&
        <div className="flex gap-2 items-center, flex-wrap">{bottomComponent}</div>
      }
    </div>
  )
}

export default AdvantageCard