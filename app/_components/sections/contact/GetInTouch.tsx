import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "../../forms/ContactForm";
import Text from "../../ui/Text";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { brand } from "@/lib/site-data";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import {Socials} from "../../misc/Socials";

const GetInTouch = () => {
  return (
    <section id='getintouch' className='flex flex-col gap-6 md:gap-10 py-6 md:py-12 w-full px-[10%] bg-[#F8F9FF]' >
        <div className="flex flex-col gap-3 w-full md:w-2/3">
            <Text type='verybig' color='black' text='Get in Touch' />
            <Text type='lg' color='grey' text="Ready to accelerate your strategic precision? Reach out to our global team for customized technology solutions." />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
            <ContactForm />
            <div className="flex flex-col gap-5 flex-2">
                <div className="flex flex-col gap-6 p-6 md:p-10 bg-[#0A2540] rounded-lg">
                    <Text type='heavytext' color='white' text='Global Support Network' />
                    <div className="flex gap-4 flex-col">
                        <div className="flexcenter w-full h-40 md:h-60 rounded-lg bg-[url('/images/map.png')] brightness-50 bg-no-repeat">
                            <div className="flexcenter p-2 rounded-full bg-[#86367E]">
                                <FaLocationDot color='white' size={16} />
                            </div>
                        </div>

                        <Link className='flex gap-3' target='_blank' href={`mailto:${brand.email}`}>
                            <div className="flexcenter bg-white/10 w-8 h-8 rounded-lg">
                                <MdOutlineEmail color='white' size={16} />
                            </div>
                            <div className="flex flex-col">
                                <Text type='smm' color='grey' text='EMAIL US' />
                                <Text type='base' color='white' text={brand.email} />
                            </div>
                        </Link>
                        <Link className='flex gap-3' target='_blank' href={`tel:${brand.phone.replace(/\s+/g, '')}`}>
                            <div className="flexcenter bg-white/10 w-8 h-8 rounded-lg">
                                <IoCallOutline color='white' size={16} />
                            </div>
                            <div className="flex flex-col">
                                <Text type='smm' color='grey' text='CALL CENTER' />
                                <Text type='base' color='white' text={brand.phone} />
                            </div>
                        </Link>
                        <Link className='flex gap-3' target='_blank' href={`https://wa.me/${brand.whatsapp.replace(/\s+/g, '')}`}>
                            <div className="flexcenter bg-white/10 w-8 h-8 rounded-lg">
                                <FaWhatsapp  color='white' size={16} />
                            </div>
                            <div className="flex flex-col">
                                <Text type='smm' color='grey' text='WHATSAPP US' />
                                <Text type='base' color='white' text={brand.whatsapp} />
                            </div>
                        </Link>

                        <hr className='border-white/10 w-full' />

                        <div className="flex flex-col gap-2.5">
                            <Text type='smm' color='grey' text='FOLLOW OUR INNOVATION' />
                            <Socials/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GetInTouch