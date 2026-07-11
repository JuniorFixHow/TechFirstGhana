import { brand } from "@/lib/site-data";
import Text from "../../ui/Text";
import Link from "next/link";
import Button from '../../ui/Button';

const ReadyToScale = () => {
  return (
    <section id='readytoscale' className='py-6 md:py-12 px-[10%] bg-[#F8F9FF] flex w-full justify-center' >
        <div className="flexcenter flex-col p-6 md:p-10 bg-[#86367E] rounded-lg md:rounded-2xl shadow gap-5 w-full">
            <Text type='big' color='white' text='Ready to Scale?' />
            <Text type='lg' className='text-white/80 w-full lg:w-1/2 text-center' color='white' text={`Join the elite companies transforming their operations through ${brand.name}'s strategic precision.`} />
            <Link href='/contact'>
                <Button text="Get Started Today" bttype='secondary' width='fit' className='py-2 px-5 font-bold' />
            </Link>
        </div>
    </section>
  )
}

export default ReadyToScale