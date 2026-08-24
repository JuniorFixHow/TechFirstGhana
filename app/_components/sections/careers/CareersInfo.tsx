import Image from "next/image";
import CareersForm from "../../forms/CareersForm";

const CareersInfo = () => {
  return (
    <section id="careersinfo" className="flex flex-col md:flex-row items-stretch bg-white px-[10%] py-6 md:py-12 gap-5 md:gap-8 w-full" >
        <div className="flex flex-col md:flex-row gap-6 w-full">
            <CareersForm/>
            <div className="hidden md:flex flex-col gap-5 md:flex-2 w-full h-160 md:h-full relative">
                <Image src='/images/career.png' className='rounded md:rounded-lg' fill alt='Careers Image' />
            </div>
        </div>
    </section>
  )
}

export default CareersInfo