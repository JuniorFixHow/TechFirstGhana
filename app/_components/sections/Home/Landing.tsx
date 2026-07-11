import { BsPatchCheck } from "react-icons/bs";
import Text from "../../ui/Text";
import Button from "../../ui/Button";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <section className='flex flex-col gap-6 md:gap-12 w-full py-6 md:py-12 px-[10%] bg-[#F8F9FF]' id='landing' >
        <div className="flex w-fit items-center gap-1.5 bg-[#E5EEFF] p-2 rounded-lg">
            <BsPatchCheck color="#86367E" size={20} />
            <Text type='smmed' color='red' text='Trusted by 500+ Corporate Partners' />
        </div>
        <div className="flex flex-col md:flex-row items-stretch gap-12">
            <div className="flex flex-1 flex-col gap-4 md:gap-6">
                <Text text='Technology Solutions That Drive Business Growth' type="verybig" />
                <Text text='Scale your operations with precision-engineered software, cloud infrastructure, and strategic IT consulting designed for the modern enterprise.' type="lg" color='grey' />
                <div className="flex flex-col gap-3 md:gap-4">
                    <Link href='/services'>
                        <Button text='Get Started' bttype="primary" className='w-fit' />
                    </Link>
                    <Link href='https://calendly.com/dev-teqxa/30min' target="_blank" rel="noopener noreferrer">
                        <Button text='Book a Consultation' bttype='elevated' />
                    </Link>
                </div>
            </div>
            <div className="flexcenter flex-1">
                <div className="flex w-full h-80 md:w-9/10 md:h-9/10 relative">
                <Image src='/images/Home1.png' className='rounded-2xl' fill  alt='Landing Image' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Landing