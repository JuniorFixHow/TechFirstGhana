import { brand } from "@/lib/site-data";
import Text from "../../ui/Text";

const MissionStatement = () => {
  return (
    <section id='missionstatement' className='flexcenter flex-col gap-5 md:gap-8 py-6 md:py-12 px-[10%] bg-[#86367E]' >
        <Text className='italic font-normal' align='center' type='big' color='white' text={`"Our mission is to empower organizations with the technology and strategic insight required to redefine their industries and build a resilient future."`} />
        <div className="flex flex-col gap-2 items-center">
            <hr className='border-gray-400 w-20' />
            <Text align='center' type='smmed' color='white' text={`${brand.name.toUpperCase()} EXECUTIVE BOARD`} />
        </div>
    </section>
  )
}

export default MissionStatement