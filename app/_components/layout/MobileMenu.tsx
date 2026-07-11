'use client'
import { navItems } from "@/lib/site-data";
import Link from "next/link";
import Button from "../ui/Button";
import { IoClose, IoMenu } from "react-icons/io5";
import { useEffect } from "react";

type MobileMenuProps = {
    activePath?: string;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const MobileMenu = ({ activePath, open, setOpen }: MobileMenuProps) => {
    // Close menu on escape key and prevent body scroll
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        }
        if (open) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        }
    }, [open, setOpen])

    return (
        <>
            {/* Backdrop Overlay */}
            <div 
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
                    open ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setOpen(false)}
            />
            
            {/* Menu Panel - Slides from right */}
            <div className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 
                          transform transition-transform duration-300 ease-out md:hidden ${
                              open ? 'translate-x-0' : 'translate-x-full'
                          }`}>
                {/* Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <IoMenu color="#86367E" size={24} />
                        <span className="font-semibold text-gray-900">Menu</span>
                    </div>
                    <button 
                        onClick={() => setOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        aria-label="Close menu"
                    >
                        <IoClose size={24} color="#43474D" />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="p-4">
                    <div className="flex flex-col gap-1">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`px-4 py-3 rounded-lg font-medium text-base transition-all duration-200 ${
                                    item.href === activePath 
                                        ? 'bg-[#86367E] text-white shadow-md' 
                                        : 'text-[#43474D] hover:bg-[#86367E]/10 hover:text-[#86367E]'
                                }`}
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    animation: open ? 'slideIn 0.3s ease-out forwards' : 'none'
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                        <Link href="/contact" onClick={() => setOpen(false)} className="block">
                            <Button 
                                text="Get Started" 
                                bttype="primary" 
                                width="full"
                                size="md"
                            />
                        </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <div className="space-y-2">
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold">Phone:</span> +233 25 773 7537
                            </p>
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold">Email:</span> contact@teqxa.com
                            </p>
                        </div>
                    </div>
                </nav>
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    )
}

export default MobileMenu