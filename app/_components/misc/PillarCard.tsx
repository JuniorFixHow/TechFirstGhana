import { ReactNode } from "react";
import Iconer from "./Iconer";
import Text from "../ui/Text";

type PillarCardProps = {
    icon: ReactNode,
    title: string,
    text: string,
}

const PillarCard = ({ icon, title, text }: PillarCardProps) => {
  return (
    <div className='bg-[#F8F9FF] border border-[#C4C6CE] flex flex-col gap-2.5 rounded-lg w-full sm:w-60 md:w-80 h-60 p-5' >
        <Iconer icon={icon} />
        <Text text={title} type="heavytext" color="black" />
        <Text text={text} type="base" color="grey" />
    </div>
  )
}

export default PillarCard