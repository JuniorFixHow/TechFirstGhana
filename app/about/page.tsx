import type { Metadata } from "next";
import AboutUs from "../_components/screen/AboutUs";
import JsonLd from "../_components/misc/JsonLd";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/seo";

const seo = {
  title: "About Us",
  description: "Meet Teqxa, an Accra based technology partner. Learn about our mission, leadership, core values and culture of innovation, integrity and excellence.",
  path: "/about",
  keywords: ["about Teqxa", "Teqxa leadership", "technology company Ghana"],
};

export const metadata: Metadata = pageMetadata(seo);

export default function page() {
  return (
    <>
      <JsonLd data={[webPageJsonLd("AboutPage", seo), breadcrumbJsonLd(seo.path)]} />
      <AboutUs />
    </>
  );
}
