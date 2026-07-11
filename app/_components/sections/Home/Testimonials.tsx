import { testimonials } from "@/lib/site-data";
import Text from "../../ui/Text";
import TestimonialItem from "../../misc/TestimonialItem";

const Testimonials = () => {
  return (
    <section id='testimonials' className='bg-[#EFF4FF] flex flex-col gap-5 md:gap-8 py-6 md:py-12 px-[10%] items-center' >
        <Text text='What Our Clients Say' type="big" color="black" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                testimonials.map((item, index) => (
                    <TestimonialItem item={item} key={index} />
                ))
            }
        </div>
    </section>
  )
}

export default Testimonials