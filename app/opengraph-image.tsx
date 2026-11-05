import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/seo";

export const alt = "Teqxa: Technology solutions that drive business growth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social share image used for every page (Facebook, LinkedIn, WhatsApp, X, Slack).
export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/images/logow.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #86367E 0%, #5A2154 55%, #0A2540 100%)",
          color: "white",
        }}
      >
        <img src={logoSrc} width={260} height={90} alt="" style={{ objectFit: "contain" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
            Technology Solutions That Drive Business Growth
          </div>
          <div style={{ fontSize: 30, opacity: 0.85 }}>
            Software · Web · Mobile · Microsoft 365 · Cloud · IT Consulting
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, opacity: 0.8 }}>
          <span>{siteConfig.tagline}</span>
          <span>Accra, Ghana</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
