import { FaLightbulb } from "react-icons/fa";
import AdvantageCard from "../../misc/AdvantageCard";
import Title from "../../misc/Title";
import Text from "../../ui/Text";
import { GoShieldCheck } from "react-icons/go";
import { LuGauge } from "react-icons/lu";

const Advantages = () => {
  return (
    <section id='advantages' className='flex flex-col bg-[#F8F9FF] py-6 md:py-12 gap-5 md:gap-8 px-[10%]' >
        <Title title='Core Advantages' desc='Our systematic approach ensures that every line of code serves a strategic business purpose.' />
        <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row w-full items-stretch gap-5">
                <AdvantageCard 
                    className='w-full md:flex-3'
                    title='Innovation'
                    text="We don't just follow trends; we engineer the future using cutting-edge AI integration and cloud-native architectures tailored to your specific ecosystem."
                    icon={<FaLightbulb size={16} />}
                    hasLine
                    bottomComponent={
                        <>
                        <div className="flexcenter bg-[#E5EEFF] p-1 rounded-2xl"><Text text='AI-First' type='smmed' color='red' /></div>
                        <div className="flexcenter bg-[#E5EEFF] p-1 rounded-2xl"><Text text='Cloud Native' type='smmed' color='red' /></div>
                        </>
                    }
                />
                <AdvantageCard 
                    className='w-full md:flex-2 bg-[#86367E]'
                    title='Reliability'
                    text="Institutional trust is our baseline. Our DevOps pipeline ensures 99.9% uptime and enterprise-grade security protocols for every deployment."
                    icon={<GoShieldCheck size={16} color='white' />}
                    iconerClass='bg-white/10' titleClass="text-white" textClass="text-white"
                />
                
            </div>

            <div className="flex flex-col md:flex-row w-full items-stretch gap-5">
                <AdvantageCard
                    className='w-full md:flex-2'
                    title='Scalability'
                    text="Built for growth. Our modular systems expand effortlessly from startup MVP to global enterprise scale without technical debt."
                    icon={<LuGauge size={16} />}
                />
                <AdvantageCard
                    className='w-full md:flex-3 bg-[#EFF4FF] shadow-lg'
                    title='Client-Centered'
                    text="Your goals are our compass. We operate as an extension of your team, providing transparent communication and strategic advisory at every milestone."
                    icon={<LuGauge size={16} />}
                    iconerClass="bg-white"
                />
            </div>
        </div>
    </section>
  )
}

export default Advantages