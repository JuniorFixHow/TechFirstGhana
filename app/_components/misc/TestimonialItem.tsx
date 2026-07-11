import { TestimonialType } from "@/types/Types";
import Text from "../ui/Text";
import Image from "next/image";

type TestimonialItemProps = {
    item: TestimonialType,
}
const TestimonialItem = ({ item }: TestimonialItemProps) => {
  return (
    <div className='bg-white border border-[#C4C6CE] rounded-lg p-5 w-full flex flex-col gap-4' >
        <Text text={item?.text} type='base' color='grey' className='italic' />
        <div className="flex items-center gap-4">
            <Image src='/images/test.png' className='rounded-full' width={50} height={50} alt='Testimonial' />
            <div className="flex flex-col">
                <span className='text-[#000F22] text-base font-bold'>{item?.name}</span>
                <Text text={item?.title} type='sm' color='grey' />
            </div>
        </div>
    </div>
  )
}

export default TestimonialItem