import Link from "next/link";
import Text from "../../ui/Text";
import Button from '../../ui/Button';

const Scale = () => {
  return (
    <section id='scale' className='mx-[10%] flex-col md:flex-row gap-5 md:gap-8 my-6 md:my-12 flex items-center bg-[#86367E] px-[10%] py-6 md:py-12 rounded-lg' >
        <div className="flex flex-col gap-4 flex-1">
            <Text text='Ready to Scale Your Business Technology?' type='big' color='white' />
            <Text text='Book a free strategy session with our senior consultants today and discover the path to strategic growth.' type='base' color='white' />
        </div>
        <div className="flex flex-1 flex-row items-center md:justify-center gap-4 w-full">
            <Link href='/contact'>
                <Button text='Get Started Now' bttype='tertiary' width='fit' />
            </Link>
            <Link href='/contact'>
                <Button text='Contact Us' bttype='blue' width='fit' />
            </Link>
        </div>
    </section>
  )
}

export default Scale