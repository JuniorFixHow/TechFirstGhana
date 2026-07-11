import { ExpertiseType } from "@/types/Types";
import Text from "../ui/Text";
import Iconer from "./Iconer";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

type ExpertiseItemProps = {
    item: ExpertiseType,
}

const ExpertiseItem = ({ item }: ExpertiseItemProps) => {
  return (
    <div className='p-5 flex flex-col border border-[#C4C6CE] rounded bg-white gap-2.5 w-full md:max-w-md' >
      <Iconer icon={item.icon} />
      <Text text={item.title} type="heavytext" color="black" />
      <Text text={item.text} type="base" color="grey" />
      <Link href={'/services'}  className="flex items-center gap-2">
        <Text text='Learn More' type="base" color="red" />
        <IoIosArrowRoundForward color="#86367E" size={18} />
      </Link>
    </div>
  )
}

export default ExpertiseItem