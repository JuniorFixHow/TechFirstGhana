import { ComponentProps } from "react";
import Text from "../ui/Text";
import { twMerge } from "tailwind-merge";

type TitleProps = {
    title: string,
    desc?: string,
} & ComponentProps<'div'>;
const Title = ({ title, desc, className, ...props }: TitleProps) => {
  return (
    <div className={twMerge("flex flex-col gap-2 items-center", className)} {...props}>
        <Text align="center" text={title} type="big" color="black" />
        {
          desc &&
        <Text align="center" text={desc} type="base" color="grey" />
        }
    </div>
  )
}

export default Title