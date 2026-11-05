import type { Metadata } from "next";
import Home from "./_components/screen/Home";
import JsonLd from "./_components/misc/JsonLd";
import { breadcrumbJsonLd, pageMetadata, siteConfig, webPageJsonLd } from "@/lib/seo";

const seo = {
  title: "Software, Web, Mobile and Cloud Solutions in Ghana",
  description: "Teqxa helps businesses grow with custom software, web and mobile app development, Microsoft 365, cloud infrastructure and strategic IT consulting from Accra, Ghana.",
  path: "/",
  keywords: ["technology company Accra", "software house Ghana", "enterprise software Africa"],
};

export const metadata: Metadata = { ...pageMetadata(seo), title: { absolute: siteConfig.title } };

export default function page() {
  return (
    <>
      <JsonLd data={[webPageJsonLd("WebPage", seo), breadcrumbJsonLd(seo.path)]} />
      <Home />
    </>
  );
}
