import { brand, footerLinks } from "@/lib/site-data";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { ContactLinks } from "../misc/Socials";

const Footer = () => {
  return (
    <footer className='flex p-4 gap-12 flex-col md:py-12 md:px-[10%] bg-[#86367E] text-white items-center' >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
            <div className="flex flex-col items-center sm:items-start gap-3">
                <Image src='/images/logow.png' width={100} height={50} alt='Logo' />
                <span className="text-base text-center sm:text-start w-4/5">Strategic digital transformation for the modern enterprise.</span>
            </div>

            <div className="flex flex-col items-center sm:items-start gap-3">
                <span className="text-sm font-bold">QUICK LINKS</span>
                {
                    footerLinks.services.map((item, index) => (
                        <Link className='text-base hover:underline' key={index} href={item.href}>{item.title}</Link>
                    ))
                }
            </div>

            <div className="flex flex-col items-center sm:items-start gap-3">
                <span className="text-sm font-bold">COMPANY</span>
                {
                    footerLinks.company.map((item, index) => (
                        <Link className='text-base hover:underline' key={index} href={item.href}>{item.title}</Link>
                    ))
                }
            </div>

            <div className="flex flex-col items-center sm:items-start gap-3">
                <span className="text-sm font-bold">CONTACT</span>
                <span className="text-base text-center sm:text-start">Contact our 24/7 support team</span>
                <ContactLinks />
                {/* <div className="flex items-center gap-2">
                    <Link href={brand?.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn color="white" />
                    </Link>
                    <Link href={brand?.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram color="white" />
                    </Link>
                    <Link href={brand?.tiktok} target="_blank" rel="noopener noreferrer">
                        <FaTiktok color="white" />
                    </Link>
                </div> */}
            </div>
        </div>
        <div className="flex gap-2 flex-col w-full border-t border-t-gray-500 items-center">
            <span className="text-sm">Copyright © {new Date().getFullYear()} {brand?.name}. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer