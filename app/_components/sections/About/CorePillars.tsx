import { FaRegLightbulb } from "react-icons/fa";
import PillarCard from "../../misc/PillarCard";
import Text from "../../ui/Text";
import { IoShieldCheckmarkOutline, IoTrophyOutline } from "react-icons/io5";

const CorePillars = () => {
  return (
    <section id='corepillars' className='flex flex-col gap-5 md:gap-8 py-6 md:py-12 px-[10%] bg-white w-full items-center' >
        <div className="flex items-center gap-2 flex-col">
            <Text align="center" text='Core Pillars' type="big" color="black" />
            <Text align="center" text='The fundamental values that drive every decision we make and every product we build.' type="base" color="grey" />
        </div>

        <div className="flex flex-row justify-between w-full flex-wrap gap-6">
            <PillarCard icon={<FaRegLightbulb color='#86367E' size={16} />} title='Innovation' text='We don’t follow trends; we set them. Our R&D investment ensures we’re always exploring the next frontier of digital capability.' />
            <PillarCard icon={<IoShieldCheckmarkOutline  color='#86367E' size={16} />} title='Integrity' text="Trust is our currency. We maintain absolute transparency in our processes, pricing, and project management." />
            <PillarCard icon={<IoTrophyOutline  color='#86367E' size={16} />} title='Excellence' text="Near-perfect is not enough. We strive for architectural precision and operational flawless in every deployment." />
        </div>
    </section>
  )
}

export default CorePillars