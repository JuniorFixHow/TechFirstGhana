import { ExpertiseType, LeaderType, TestimonialType } from "@/types/Types";
import { CiCloudOn, CiGlobe } from "react-icons/ci";
import { IoMdCode } from "react-icons/io";
import { IoPhonePortraitOutline, IoShieldCheckmarkOutline, IoTrophyOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { SlBulb } from "react-icons/sl";

export const brand = {
  name: "Teqxa",
  shortName: "Teqxa",
  email: "contact@teqxa.com",
  phone: "+233 25 773 7537",
  address: "100 Tech Plaza, Accra, Ghana",
  whatsapp: "+233 54 109 7145",
  linkedin: 'https://www.linkedin.com/in/tech-first-ghana-59b09441b/',
  tiktok: 'https://www.tiktok.com/@tech.first.ghana?_r=1&_t=ZS-97dkNsdQ3xR',
  instagram: 'https://www.instagram.com/techfirst_gh?igsh=N2l6c3owdmltc3hh&utm_source=qr'
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/contact", label: "Contact Us" },
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

export const services:ExpertiseType[] = [
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
  services: [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Services",
      href: "/services"
    },
    {
      title: "Why Choose Us",
      href: "/why-choose-us"
    },
    {
      title: "Contact Us",
      href: "/contact"
    }
  ],
  company: [
    {
      title: "About Us",
      href: "/about"
    },
    {
      title: "Privacy Policy",
      href: "https://www.termsfeed.com/live/afd74888-64e5-4a03-9a9f-e75205da1cb0"
    },
    // {
    //   title: "Success Stories",
    //   href: "/success-stories"
    // },
    // {
    //   title: "Privacy Policy",
    //   href: "/privacy-policy"
    // }
  ],
};


export const roadmap = [
  {
    id: 1,
    title:'Consultation',
    activity: 'Deep dive into goals and pain points',
  },
  {
    id: 2,
    title:'Architecture',
    activity: 'Systemic planning and tech slection',
  },
  {
    id: 3,
    title:'Implementation',
    activity:'Agile execution with transparent reporting'
  },
  {
    id: 4,
    title: 'Testing',
    activity: 'Rigorous QA and security auditing',
  },
  {
    id: 5,
    title: 'Launch',
    activity:'Seamless deployment and scale support',
  }
]

export const testimonials:TestimonialType[] = [
  {
    name:'Marcus Thorne',
    title:'CTO, NexaCorp',
    text: `"${brand.name} transformed our legacy systems into a modern cloud infrastructure in half the expected time. Their precision is unmatched."`
  },
  {
    name:'Elena Rodriguez',
    title:'Director of Innovation, CloudLink',
    text: `"The level of strategic consulting we received was world-class. They don't just build software; they build business growth."`
  },
  {
    name:'David chen',
    title: 'VP Operations, TechStream',
    text: `"Their Microsoft 365 implementation was seamless. Our team productivity skyrocketed within the first month of migration."`
  }
]


export const leaders:LeaderType[] = [
  {
    name:'Annan Junior',
    title:'Co-founder & CTO',
    text: "A pioneer in distributed systems and AI, Junior oversees our technical architecture and R&D lab, ensuring we remain at the cutting edge.",
    image: '/images/Annan.png'
  },
  {
    name: 'Matilda Baffah',
    title: 'Co-founder & Head of Design',
    text: `With many years in strategic operations, Matilda leads ${brand.name}'s global vision and growth strategy, focusing on sustainable innovation.`,
    image: '/images/Matilda.jpg'
  }
]