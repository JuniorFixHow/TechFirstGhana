import { ContactForm } from "@/app/_components/forms/ContactForm";
import { SiteShell } from "@/app/_components/layout/SiteShell";
import { VisualPanel } from "@/app/_components/ui/VisualPanel";
import { brand } from "@/lib/site-data";
import { BsFillGlobeAmericasFill, BsGrid3X3 } from "react-icons/bs";
import { CiMail, CiPhone } from "react-icons/ci";
import { IoShareSocial, IoShieldCheckmarkOutline } from "react-icons/io5";
import Iconer from "../_components/ui/Iconer";
import Link from "next/link";
import { MdKeyboardCommandKey } from "react-icons/md";
import { HiOutlineCommandLine } from "react-icons/hi2";

export default function ContactPage() {
  return (
    <SiteShell activePath="/contact-us">
      <section className="contact-page">
        <div className="container">
          <div className="contact-intro">
            <h1>Get in Touch</h1>
            <p>
              Ready to accelerate your strategic precision? Reach out to our team for customized
              technology solutions.
            </p>
          </div>
          <div className="contact-grid">
            <ContactForm />
            <aside className="support-card">
              <h2>Global Support Network</h2>
              <VisualPanel variant="map" path="map" />
              <div className="contact-list">
                <div className="flex flex-row gap-3.5 items-start">
                  <div className="flex items-center justify-center p-2 rounded bg-white/10">
                    <BsGrid3X3 color="white" />
                  </div>
                    <div className="flex flex-col">
                      <strong>Global HQ</strong>
                      <span>{brand.address}</span>
                    </div>
                </div>
                <div className="flex flex-row gap-3.5 items-start">
                  <div className="flex items-center justify-center p-2 rounded bg-white/10">
                    <CiMail  color="white" />
                  </div>
                    <div className="flex flex-col">
                      <strong>Email Us</strong>
                      <span>{brand.email}</span>
                    </div>
                </div>
                <div className="flex flex-row gap-3.5 items-start">
                  <div className="flex items-center justify-center p-2 rounded bg-white/10">
                    <CiPhone  color="white" />
                  </div>
                    <div className="flex flex-col">
                      <strong>Call Center</strong>
                      <span>{brand.phone}</span>
                    </div>
                </div>
              </div>
              <hr />
              <h3>Follow Our Innovation</h3>
              <div className="social-circles">
                <Link className='rounded-full p-2 border border-white mt-1'  target='_blank' href={'/'} ><MdKeyboardCommandKey color="white" size={24} /></Link>
                <Link className='rounded-full p-2 border border-white mt-1'  target='_blank' href={'/'} ><HiOutlineCommandLine  color="white" size={24} /></Link>
                <Link className='rounded-full p-2 border border-white mt-1'  target='_blank' href={'/'} ><IoShareSocial  color="white" size={24} /></Link>
                <Link className='rounded-full p-2 border border-white mt-1'  target='_blank' href={'/'} ><BsFillGlobeAmericasFill  color="white" size={24} /></Link>
              </div>
            </aside>
            <div className="reliability-card">
              <Iconer className='h-8 w-16' ><IoShieldCheckmarkOutline color='#86367E' /></Iconer>
              <p><strong>Reliability Guaranteed</strong>We respond to enterprise inquiries within 12 business hours.</p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
