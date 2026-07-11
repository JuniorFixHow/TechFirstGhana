import Image from "next/image";
import Text from "../../ui/Text";

const FeaturedApp = () => {
  return (
    <section id='featuredapp' className='bg-[#F8F9FF] flex py-6 md:py-12 px-[10%]' >
        <div className="flex flex-col-reverse md:flex-row md:items-stretch bg-white rounded-lg md:rounded-2xl shadow-lg border border-[#C4C6CE]">
            <div className="flex relative md:flex-1 w-full h-80 md:h-auto">
                <Image src='/images/FeatureGraphic.png' fill className="md:rounded-l-2xl rounded-b-lg" alt='Featured App' />
                <div className="absolute left-2 bottom-2 flexcenter px-2 py-1 bg-[#86367E]">
                    <Text text='CASE STUDY' type='smmed' color='white' />
                </div>
            </div>

            <div className="flex md:flex-1 w-full flex-col gap-5 p-6">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Text text='FEATURED WORK' type='smm' color='red' />
                        <Text text='Global Surveying App' type='big' color='black' />
                    </div>
                    <Text className='italic' type='base' color='grey' text="Professional grade land surveying, with precise boundaries, elevation data, and instant reports, right from your phone, wherever the job takes you" />
                </div>

                <div className="flex flex-col bg-[#EFF4FF] border-l-2 border-l-[#0762FF] p-4 gap-4 rounded-r-lg md:rounded-r-2xl">
                    <Text className='italic' type='lg' color='black' text={`"Working with this development team has been an incredible experience; they took a complex idea and turned it into a polished, reliable surveying app that our users trust every single day, all while delivering ahead of schedule and going above and beyond at every step."`} />
                    <div className="flex gap-2 items-center">
                        <Image src='/images/test.png' className='rounded-full' width={50} height={50} alt='Testimonial' />
                        <div className="flex flex-col gap-0.5">
                            <Text text="Emmanuel Bosomtwe" type='sm' color='black' className='italic' />
                            <Text text="CEO, Survey Panorama" type='xs' color='grey' className='italic' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturedApp