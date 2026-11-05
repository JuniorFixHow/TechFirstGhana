import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

const routes: { path: string; priority: number; changeFrequency: ChangeFrequency; images?: string[] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly", images: ["/images/Home1.png", "/images/Home2.png"] },
  { path: "/services", priority: 0.9, changeFrequency: "monthly", images: ["/images/Services.png", "/images/MobileDevelopmentInterface.png", "/images/Visualization.png"] },
  { path: "/about", priority: 0.8, changeFrequency: "monthly", images: ["/images/AboutUs.png", "/images/Annan.png", "/images/Matilda.jpg"] },
  { path: "/why-choose-us", priority: 0.8, changeFrequency: "monthly", images: ["/images/WhyChooseUs.png", "/images/FeatureGraphic.png"] },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/careers", priority: 0.6, changeFrequency: "monthly", images: ["/images/career.png"] },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency, images }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
    images: images?.map((img) => absoluteUrl(img)),
  }));
}
