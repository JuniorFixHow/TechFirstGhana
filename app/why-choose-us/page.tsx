import type { Metadata } from "next";
import WhychooseUs from "../_components/screen/WhychooseUs";
import JsonLd from "../_components/misc/JsonLd";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

const seo = {
  title: "Why Choose Us",
  description: "See why businesses choose Teqxa as their digital transformation partner: AI-first engineering, 24/7 support, proven delivery and featured client work.",
  path: "/why-choose-us",
  keywords: ["why Teqxa", "digital transformation partner", "software case study Ghana"],
};

export const metadata: Metadata = pageMetadata(seo);

export default function page() {
  return (
    <>
      <JsonLd data={[webPageJsonLd("WebPage", seo), breadcrumbJsonLd(seo.path)]} />
      <WhychooseUs />
    </>
  );
}
