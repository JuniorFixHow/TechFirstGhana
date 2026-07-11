import { brand } from "@/lib/site-data";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export const Socials = () => {
  return (
    <div className='flex gap-3 items-center' >
        <Link className='border border-white/20 rounded-full flexcenter h-8 w-8' href={brand.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn color='white' size={16} />
        </Link>
        <Link className='border border-white/20 rounded-full flexcenter h-8 w-8' href={brand.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram color='white' size={16} />
        </Link>
        <Link className='border border-white/20 rounded-full flexcenter h-8 w-8' href={brand.tiktok} target="_blank" rel="noopener noreferrer">
            <FaTiktok color='white' size={16} />
        </Link>
    </div>
  )
}



export const ContactLinks = () => {
    return (
        <div className='flex gap-3 items-center' >
            <Link  href={`mailto:${brand.email}`} target="_blank" rel="noopener noreferrer">
                <MdOutlineEmail color='white' size={16} />
            </Link>
            <Link href={`tel:${brand.phone.replace(/\s+/g, '')}`} target="_blank" rel="noopener noreferrer">
                <IoCallOutline color='white' size={16} />
            </Link>
            <Link  href={`https://wa.me/${brand.whatsapp.replace(/\s+/g, '')}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp  color='white' size={16} />
            </Link>
        </div>
    )
}