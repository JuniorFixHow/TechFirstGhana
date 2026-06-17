import { CiCloudOn, CiGlobe } from "react-icons/ci";
import { IoMdCode } from "react-icons/io";
import { IoPhonePortraitOutline, IoShieldCheckmarkOutline, IoTrophyOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { SlBulb } from "react-icons/sl";

export const brand = {
  name: "TechFirst Ghana",
  shortName: "TechFirst",
  email: "contact@techfirstghana.com",
  phone: "+233 30 000 0000",
  address: "100 Tech Plaza, Accra, Ghana",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/contact-us", label: "Contact Us" },
];

export const pillers = [
  {
    title: "Innovation",
    icon: <SlBulb color="#86367E" />,
    text: "We don't follow trends; we set them. Our R&D investment ensures we're always exploring the next frontier of digital capability."
  },
  {
    title: "Integrity",
    icon: <IoShieldCheckmarkOutline color="#86367E" />,
    text: "Trust is our currency. We maintain absolute transparency in our processes, pricing, and project management."
  },
  {
    title: "Excellence",
    icon: <IoTrophyOutline color="#86367E" />,
    text: "Near-perfect is not enough. We strive for architectural precision and operational flawless in every deployment."
  }
]

export const services = [
  {
    title: "Software Dev",
    text: "Custom enterprise solutions engineered for scalability, security, and performance.",
    icon: <IoMdCode />,
  },
  {
    title: "Web Dev",
    text: "High-performance web applications built with modern frameworks and intuitive UX.",
    icon: <CiGlobe />,
  },
  {
    title: "Mobile App",
    text: "Native and cross-platform mobile experiences that engage users on every screen.",
    icon: <IoPhonePortraitOutline />,
  },
  {
    title: "Microsoft 365",
    text: "Maximize productivity with seamless cloud integration and specialized workplace tools.",
    icon: <LuLayoutDashboard />,
  },
  {
    title: "Cloud",
    text: "Secure, flexible infrastructure designed to scale alongside your business growth.",
    icon: <CiCloudOn />,
  },
  {
    title: "IT Consulting",
    text: "Expert guidance to navigate the evolving technology landscape and optimize your roadmap.",
    icon: <SlBulb />,
  },
];

export const footerLinks = {
  services: ["Digital Strategy", "Custom Software", "Cloud Migration", "AI & Data Analytics"],
  company: ["About Us", "Careers", "Success Stories", "Privacy Policy"],
};
