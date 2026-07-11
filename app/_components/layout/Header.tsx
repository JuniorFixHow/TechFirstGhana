'use client'
import { navItems } from "@/lib/site-data";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

type HeaderProps = {
    activePath?:string
}

const Header = ({ activePath }: HeaderProps) => {
    const [open, setOpen] = useState(false);
  return (
    <header className='bg-white flex flex-row items-center justify-between md:justify-around py-2.5 md:py-4 border-b border-b-gray-100 px-[10%] w-full' >
        <Link href='/'>
            <Image src='/images/logo.png' width={100} height={50} alt='Logo' />
        </Link>
        <IoMenu onClick={()=>setOpen(true)} color='86367E' size={24} className='cursor-pointer md:hidden' />
        {
            open && <MobileMenu activePath={activePath} open={open} setOpen={setOpen} />
        }
        <nav className='hidden md:flex items-center justify-center flex-1 gap-8' >
            <div className="flex items-center gap-6">
                {
                    navItems.map((item, index) => (
                        <Link className={`${item.href === activePath ? 'text-[#86367E] underline' : 'text-[#43474D]'} hover:text-[#86367E] font-medium text-sm`} key={index} href={item.href}>
                            {item.label}
                        </Link>
                    ))
                }
            </div>
            <Link href='/contact'>
                <Button text='Get Started' bttype='primary' />
            </Link>
        </nav>
    </header>
  )
}

export default Header