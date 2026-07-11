import { services } from "@/lib/site-data";
import ExpertiseItem from "../../misc/ExpertiseItem";
import Text from "../../ui/Text";

const Expertise = () => {
  return (
    <section id='expertise' className='flex flex-col gap-5 md:gap-8 py-6 md:py-12 px-[10%]' >
        <div className="flex flex-col gap-2">
            <Text text='Core Expertise' align="center" type="big" color="black" />
            <Text align="center" text='From enterprise software to cloud migrations, we provide the technical foundation for scalable success.' type="base" color="grey" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {
                services.map((item, index) => (
                    <ExpertiseItem item={item} key={index} />
                ))
            }
        </div>
    </section>
  )
}

export default Expertise