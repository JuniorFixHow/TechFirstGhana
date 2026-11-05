import type { Metadata } from "next";
import Careers from "../_components/screen/Careers";
import JsonLd from "../_components/misc/JsonLd";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

const seo = {
  title: "Careers",
  description: "Join the Teqxa equity-based career programme and help build innovative technology products in Ghana. Apply to contribute your skills, ideas or resources.",
  path: "/careers",
  keywords: ["tech jobs Accra", "software developer jobs Ghana", "equity-based career programme"],
};

export const metadata: Metadata = pageMetadata(seo);

export default function page() {
  return (
    <>
      <JsonLd data={[webPageJsonLd("WebPage", seo), breadcrumbJsonLd(seo.path)]} />
      <Careers />
    </>
  );
}
