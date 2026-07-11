import { IoIosCheckmarkCircleOutline, IoMdCode } from "react-icons/io";
import Iconer from "../../misc/Iconer";
import ServiceCard from "../../misc/ServiceCard";
import Title from "../../misc/Title";
import Text from "../../ui/Text";
import ServiceTags from "../../misc/ServiceTags";
import Button from "../../ui/Button";
import Link from "next/link";
import { RiExchange2Line } from "react-icons/ri";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import Image from "next/image";

const ServicePillars = () => {
  return (
    <section id='servicepillars' className='flex flex-col gap-5 md:gap-8 py-6 md:py-12 px-[10%] bg-white items-center' >
        <Title className='w-full md:w-2/3' title='Our Core Service Pillars' desc="Precision-engineered solutions designed to scale with your ambition. We provide the architectural stability required for modern enterprise success." />

        <div className="flex flex-col gap-5 w-full">
            <div className="flex md:flex-row flex-col gap-5 items-stretch">
                <ServiceCard className='flex-3' >
                    <div className="flex gap-2 items-center">
                        <Iconer className='bg-[#86367E]' icon={<IoMdCode size={16} color='white' />} />
                        <Text text='Software & Web Development' type='heavytext' color='black' />
                    </div>

                    <Text type='base' color='grey' text="We craft robust, high-performance web applications and custom software architectures. Utilizing modern stacks and agile methodologies, we deliver solutions that are secure, scalable, and optimized for speed." />

                    <div className="flex items-center gap-1.5 flex-wrap">
                        <ServiceTags tag='React & Node.js' className='text-[#768DAD]' />
                        <ServiceTags tag='.NET & C#' className='text-[#768DAD]' />
                        <ServiceTags tag='Enterprise APIs' className='text-[#768DAD]' />
                        <ServiceTags tag='Python Backend' className='text-[#768DAD]' />
                    </div>
                    <Link href='/contact'>
                        <Button className='px-4 py-2' text='Request a Quote' bttype='primary' />
                    </Link>
                </ServiceCard>
                <ServiceCard className='flex-2 bg-[#86367E] gap-4 md:gap-5' >
                    <div className="flex gap-2 items-center">
                        <Iconer  icon={<RiExchange2Line size={16} />} />
                        <Text text='IT Consulting' type='heavytext' color='white' />
                    </div>

                    <Text type='base' color='white' text="Strategic roadmap planning and infrastructure auditing to align your technology stack with your business's long-term growth objectives." />

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1.5">
                            <IoIosCheckmarkCircleOutline size={16} color='white' />
                            <Text text='Digital Transformation' type='base' color='white' />
                        </div>
                        <div className="flex items-center gap-1.5">
                            <IoIosCheckmarkCircleOutline size={16} color='white' />
                            <Text text='Infrastructure Audit' type='base' color='white' />
                        </div>
                        <div className="flex items-center gap-1.5">
                            <IoIosCheckmarkCircleOutline size={16} color='white' />
                            <Text text='Security Strategy' type='base' color='white' />
                        </div>
                    </div>
                    <Link className='w-full' href='/contact'>
                        <Button bttype='outlined' text='Request a Quote' width='full' />
                    </Link>
                </ServiceCard>
            </div>


            <div className="flex md:flex-row flex-col gap-5 items-stretch">
                <ServiceCard className='flex-2 border-[#0762FF]' >
                    <div className="flex gap-2 items-center">
                        <Iconer  icon={<IoMdCode size={16} color='#86367E' />} />
                        <Text text='Microsoft 365 & Cloud' type='heavytext' color='black' />
                    </div>

                    <Text type='base' color='grey' text="Complete ecosystem integration. We specialize in Azure migration, Microsoft 365 optimization, and hybrid cloud management for secure remote collaboration." />

                    <div className="flex items-center gap-1.5 flex-wrap">
                        <ServiceTags tag='Azure Migration' className='text-[#161C23] bg-[#DEE3ED]' />
                        <ServiceTags tag='SharePoint' className='text-[#161C23] bg-[#DEE3ED]' />
                        <ServiceTags tag='Power Apps' className='text-[#161C23] bg-[#DEE3ED]' />
                        <ServiceTags tag='M365 Admin' className='text-[#161C23] bg-[#DEE3ED]' />
                    </div>
                    <Link href='/contact'>
                        <Button bttype='blue' text='Request a Quote' className='px-4 py-2' />
                    </Link>
                </ServiceCard>

                <ServiceCard className='flex-2 bg-[#DCE9FF] gap-4 md:gap-5' >
                    <div className="flex flex-row items-stretch gap-4">
                        <div className="flex flex-1 flex-col gap-4">
                            <div className="flex gap-2 items-stretch">
                                <Iconer className='h-auto bg-[#86367E]' icon={<HiMiniDevicePhoneMobile color='white' size={16} />} />
                                <Text text='Mobile App Devlopment' type='heavytext' color='black' />
                            </div>
                            <Text type='base' color='black' text="Native and cross-platform mobile experiences that engage users. From iOS to Android, we focus on intuitive UX and high-performance execution." />
                        </div>
                        <div className="flex flex-1 relative h-auto">
                            <Image src='/images/MobileDevelopmentInterface.png' className='rounded-md md:rounded-xl' fill alt='Mobile App Image' />
                        </div>
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap">
                        <ServiceTags tag='React Native' className='text-[#86367E] bg-white' />
                        <ServiceTags tag='Expo' className='text-[#86367E] bg-white' />
                        <ServiceTags tag='.NET & C#' className='text-[#86367E] bg-white' />
                        <ServiceTags tag='Android & iOS' className='text-[#86367E] bg-white' />
                    </div>
                    <Link className='w-full' href='/contact'>
                        <Button bttype='primary' text='Request a Quote' className='px-4 py-2'  />
                    </Link>
                </ServiceCard>
            </div>
        </div>
    </section>
  )
}

export default ServicePillars