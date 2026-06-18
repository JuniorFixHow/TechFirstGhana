import { brand, footerLinks } from "@/lib/site-data";
import { Logo } from "@/app/_components/ui/Logo";
import Link from "next/link";
import { IoShareSocial } from "react-icons/io5";
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>Strategic digital transformation for the modern enterprise.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <div className="flex gap-2 flex-col">

            {footerLinks.services.map((link) => (
              <Link className='hover:underline' key={link.href} href={link.href}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3>Company</h3>
          <div className="flex gap-2 flex-col">
            {footerLinks.company.map((link) => (
              <Link target='_blank' key={link.href} href={link.href}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            {brand.address}
            <br />
            {brand.email}
          </p>
          <div className="footer-icons" aria-label="Social links">
            <Link href={'/'} target='_blank'><IoShareSocial color="white" size={24} /></Link>
            <Link href={'/'} target='_blank'><MdOutlineEmail color="white" size={24} /></Link>
            <Link href={'/'} target='_blank'><MdOutlineCall  color="white" size={24} /></Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} {brand.name} Solutions. All rights reserved.</div>
    </footer>
  );
}
