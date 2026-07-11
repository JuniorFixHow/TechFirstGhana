import Image from "next/image";
import Text from "../../ui/Text";

const Journey = () => {
  return (
    <section id='journey' className='flex flex-col md:flex-row items-stretch bg-white px-[10%] py-6 md:py-12 gap-5 md:gap-8' >
        <div className="flex flex-1 relative w-full">
            <div className="flex w-full h-80 md:h-full relative">
                <Image src='/images/AboutUs.png' className='rounded-2xl' fill  alt='Journey Image' />
            </div>
            <div className="flex flex-col p-6 rounded-lg gap-1 bg-[#86367E] -bottom-1 -right-1 absolute">
                <Text text='Since 2016' type='base' color='white' />
                <Text text='Building the digital transformation' type='base' color='white' />
            </div>
        </div>

        <div className="flex flex-1 flex-col gap-5">
            <Text text='Our Journey' type='big' color='red' />
            <div className="flex flex-col gap-3">
                <Text type='base' color='grey' text="What started as a small team of passionate engineers in a shared workshop has evolved into a global technology powerhouse. Our history is defined by a relentless pursuit of excellence and a commitment to solving the most difficult technical challenges." />
                <Text type='base' color='grey' text="We don't just build software; we build the infrastructure that empowers industries. From cloud transformations to AI-driven analytics, our path has always been guided by the needs of our clients and the possibilities of the future." />
            </div>
        </div>
    </section>
  )
}

export default Journey