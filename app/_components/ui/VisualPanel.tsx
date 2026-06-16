import Image from "next/image";

type VisualPanelProps = {
  variant?: "office" | "dashboard" | "phone" | "map" | "warehouse";
  path?: "office" | "dashboard" | "phone" | "map" | "warehouse" | 'home2' | 'about' | 'services' | 'visualization' | 'why';
  label?: string;
};

const PANEL_IMAGES: Record<NonNullable<VisualPanelProps["path"]>, string> = {
  office: "/images/Home1.png",
  dashboard: "/images/Visualization.png",
  phone: "/images/MobileDevelopmentInterface.png",
  map: "/images/map.png",
  warehouse: "/images/CaseStudy.png",
  home2: "/images/Home2.png",
  about: "/images/AboutUs.png",
  services: "/images/Services.png",
  visualization: "/images/Visualization.png",
  why: "/images/WhyChooseUs.png",
};

export function VisualPanel({ variant = "office", path="office", label }: VisualPanelProps) {
  const src = PANEL_IMAGES[path] ?? PANEL_IMAGES.office;

  return (
    <div className={`visual-panel visual-${variant}`} aria-label={label ?? "Technology visual"}>
      <div className="visual-image">
        <Image
          src={src}
          alt={label ?? `${variant} visual`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="visual-img"
        />
      </div>
    </div>
  );
}
