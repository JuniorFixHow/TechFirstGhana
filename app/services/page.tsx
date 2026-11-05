import type { Metadata } from "next";
import Services from "../_components/screen/Services";
import JsonLd from "../_components/misc/JsonLd";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd, servicesJsonLd } from "@/lib/seo";

const seo = {
  title: "Services",
  description: "Explore Teqxa services: custom software and web development, mobile apps, Microsoft 365 and Azure cloud, and IT consulting for digital transformation.",
  path: "/services",
  keywords: ["software development services", "mobile app developers Ghana", "Azure migration Ghana", "Microsoft 365 implementation"],
};

export const metadata: Metadata = pageMetadata(seo);

export default function page() {
  return (
    <>
      <JsonLd data={[webPageJsonLd("CollectionPage", seo), breadcrumbJsonLd(seo.path), servicesJsonLd]} />
      <Services />
    </>
  );
}
