import { LeaderType } from "@/types/Types";
import Image from "next/image";
import Text from "../ui/Text";

type LeaderCardProps = {
    item: LeaderType,
}
const LeaderCard = ({ item }: LeaderCardProps) => {
  return (
    <div className='flex items-center w-full p-5 gap-5 bg-white border border-[#E2E8F0] rounded-xl' >
        <Image src={item.image} className='rounded-xl' width={100} height={200} alt={item.name} />
        <div className="flex flex-col gap-2">
            <Text text={item.name} type="heavytext" color="black" />
            <Text text={item.title} type="base" color="red" />
            <Text text={item.text} type="base" color="grey" />
        </div>
    </div>
  )
}

export default LeaderCard