import { roadmap } from "@/lib/site-data";
import Text from "../../ui/Text";
import Counter from "../../misc/Counter";

const Roadmap = () => {
  return (
    <section id='roadmap' className='flex flex-col gap-5 md:gap-8 bg-white py-6 md:py-12 px-[10%]' >
        <div className="flex gap-2 flex-col w-full items-center">
            <Text text='Our Strategic Roadmap' type="big" color="black" />
            <Text text='A systematic approach to transforming your vision into high-performance reality.' type="base" color="grey" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {
                roadmap.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2 items-center ">
                        <Counter count={item.id.toString()} />
                        <Text text={item.title} type="base" color="black" />
                        <Text className='line-clamp-2' text={item.activity} type="smmed" align='center' color="grey" />
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Roadmap