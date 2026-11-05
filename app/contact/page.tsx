import type { Metadata } from "next";
import Contact from "../_components/screen/Contact";
import JsonLd from "../_components/misc/JsonLd";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

const seo = {
  title: "Contact Us",
  description: "Contact Teqxa in Accra, Ghana by email, phone or WhatsApp, or book a free consultation to discuss your software, cloud or IT project.",
  path: "/contact",
  keywords: ["contact Teqxa", "hire software developers Ghana", "IT consultation Accra"],
};

export const metadata: Metadata = pageMetadata(seo);

export default function page() {
  return (
    <>
      <JsonLd data={[webPageJsonLd("ContactPage", seo), breadcrumbJsonLd(seo.path)]} />
      <Contact />
    </>
  );
}
