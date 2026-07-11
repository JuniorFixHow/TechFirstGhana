import Link from "next/link";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import Image from "next/image";

const DigitalTransformation = () => {
  return (
    <section id='digitaltransformation' className='flex flex-col md:flex-row gap-5 md:gap-8 py-6 md:py-12 px-[10%] bg-[#86367E] md:items-stretch' >
        <div className="flex flex-1 flex-col gap-4">
            <div className="flexcenter bg-white rounded-2xl p-1 w-fit">
                <Text text='EFFICIENCY REDEFINED' type='smmed' color='red' />
            </div>
            <Text text='Your Partner in Digital Transformation' type="verybig" color="white" />
            <Text text='We bridge the gap between complex engineering and strategic business goals, delivering technology solutions that scale with your ambition.' type="lg" color="white" />
            <div className="flex items-center gap-5">
                <Button text='Schedule Strategic Call' bttype='tertiary' width='fit' />
                <Link href='/#roadmap'>
                    <Button text='View Methodology' bttype='ghost' width='fit' />
                </Link>
            </div>
        </div>
        <div className="flex md:flex-1 h-80 md:h-auto w-full flexcenter">
            <div className="flexcenter w-full md:w-4/5 h-full relative">
                <Image src='/images/WhyChooseUs.png' className='rounded-2xl' fill alt='Why Choose Us Image' />
            </div>
        </div>
    </section>
  )
}

export default DigitalTransformation