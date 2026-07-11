import { brand } from "@/lib/site-data";
import Text from "../../ui/Text";

const Mission = () => {
  return (
    <section id='mission' className='bg-[#F8F9FF] flex flex-col gap-5 md:gap-8 items-center px-[10%] py-6 md:py-12' >
        <div className="flex flex-col items-center gap-4 w-full lg:w-2/3">
            <Text text={'OUR MISSION'} type="base" color="red" />
            <Text align='center' text={'Pioneering the future of Technology'} type="verybig" color="black" />
            <Text align='center' text={`At ${brand.name}, we bridge the gap between complex engineering and strategic business growth, delivering precision-driven solutions for tomorrow's leaders.`} type="lg" color="grey" />
        </div>
        <div className="flex justify-center gap-6 items-center">
            <div className="flex flex-col items-center">
                <Text text='150+' type='heavytext' />
                <Text text='Global Partners' type='xs' />
            </div>
            <div className="flex flex-col items-center">
                <Text text='10+' type='heavytext' />
                <Text text='Years of Innovation' type='xs' />
            </div>
            <div className="flex flex-col items-center">
                <Text text='99.9%' type='heavytext' />
                <Text text='Success Rate' type='xs' />
            </div>
        </div>
    </section>
  )
}

export default Mission