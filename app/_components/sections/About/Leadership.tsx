import { leaders } from "@/lib/site-data";
import LeaderCard from "../../misc/LeaderCard";
import Text from "../../ui/Text";

const Leadership = () => {
  return (
    <section id='leadership' className='py-6 md:py-12 px-[10%] flex flex-col gap-5 md:gap-8 items-center' >
        <div className="flex flex-col items-center gap-2">
            <Text text='Our Leadership' type="big" color="black" />
            <Text text="Visionaries dedicated to transforming technical potential into measurable businessimpact." type="base" color="grey" />
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-6 md:gap-8">
            {
                leaders.map((item, index) => (
                    <LeaderCard item={item} key={index} />
                ))
            }
        </div>
    </section>
  )
}

export default Leadership