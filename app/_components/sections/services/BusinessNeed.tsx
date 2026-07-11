import { brand } from "@/lib/site-data";
import Text from "../../ui/Text";
import Button from "../../ui/Button";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const BusinessNeed = () => {
  return (
    <section id='businessneed' className='flex flex-col md:flex-row items-stretch py-6 md:py-12 gap-5 md:gap-8 px-[10%] bg-[#EFF4FF]' >
        <div className="flex w-full md:flex-1 flex-col gap-5">
            <div className="flexcenter bg-[#DBE1FF] rounded-2xl px-3 py-1 w-fit">
                <Text text='OUR EXPERTISE' type='smmed' color='red' />
            </div>
            <Text type='verybig' text='Scalable Solutions for Every Business Need' />
            <Text type='lg' color='grey' text={`At ${brand.name}, we bridge the gap between complex engineering and strategic business goals. Our systematic approach ensures every line of code drives measurable enterprise value.`} />
            <Link href='#servicepillars' >
                <Button className='px-4 py-2' text='Learn More' bttype='primary' width='fit' icon={<IoIosArrowRoundForward size={16} color='white' />} />
            </Link>
        </div>

        <div className="flexcenter md:flex-1 md:h-auto w-full h-80">
            <div className="flex w-full md:w-9/10 h-full relative">
                <Image src='/images/Services.png' className='rounded-lg md:rounded-2xl opacity-20' fill alt='Services Image' />
                <div className='absolute inset-0 bg-linear-to-br from-[#0762FF33]/90 to-[#0762FF33]/80 rounded-lg md:rounded-2xl' />
            </div>
        </div>
    </section>
  )
}

export default BusinessNeed