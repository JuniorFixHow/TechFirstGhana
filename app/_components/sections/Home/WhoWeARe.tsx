import { FaRegCheckCircle } from "react-icons/fa";
import Text from "../../ui/Text";
import { brand } from "@/lib/site-data";
import Image from "next/image";

const WhoWeARe = () => {
  return (
    <section id='whoweare' className='flex items-stretch flex-col-reverse md:flex-row py-6 md:py-12 px-[10%] bg-white gap-6' >
        <div  className="flex relative  flex-1">
            <div className="flex w-full h-80 md:h-full relative">
                <Image src='/images/Home2.png' className='rounded-2xl' fill  alt='Who We Are Image' />
            </div>
            <div className="flex flex-col absolute bg-[#86367E] rounded-lg p-5 bottom-4 left-4">
                <span className='text-white font-semibold' >10+ Years</span>
                <span className='text-white font-light' >Of Excellence in IT Innovation</span>
            </div>
        </div>

        <div className="flex flex-1 flex-col gap-6 items-start">
            <Text text='WHO WE ARE' type="smmed" color="red" />
            <Text text='Strategic Partners in Your Digital Transformation' type="big" color="black" />
            <Text text={`${brand.name} isn't just a service provider; we are an extension of your business. We bridge the gap between complex technological challenges and high-performance business outcomes through architectural stability and rigorous innovation.`} type="base" color="grey" />
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <FaRegCheckCircle color="#86367E" size={18} />
                    <Text text='Data-driven strategy and architectural precision' type="base" color="black" />
                </div>
                <div className="flex items-center gap-2">
                    <FaRegCheckCircle color="#86367E" size={18} />
                    <Text text='Agile development cycles for rapid deployment' type="base" color="black" />
                </div>
                <div className="flex items-center gap-2">
                    <FaRegCheckCircle color="#86367E" size={18} />
                    <Text text='Continuous support and infrastructure monitoring' type="base" color="black" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhoWeARe