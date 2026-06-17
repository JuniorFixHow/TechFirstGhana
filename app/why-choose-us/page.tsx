import { CtaBand } from "@/app/_components/sections/CtaBand";
import { SectionHeader } from "@/app/_components/sections/SectionHeader";
import { SiteShell } from "@/app/_components/layout/SiteShell";
import { ButtonLink } from "@/app/_components/ui/ButtonLink";
import { VisualPanel } from "@/app/_components/ui/VisualPanel";
import { brand } from "@/lib/site-data";
import { RiLightbulbFlashFill } from "react-icons/ri";
import Iconer from "../_components/ui/Iconer";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LuCircleGauge } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";

export default function WhyChooseUsPage() {
  return (
    <SiteShell activePath="/why-choose-us">
      <section className="hero hero-purple">
        <div className="container hero-grid">
          <div>
            <span className="pill light">Efficiency Redefined</span>
            <h1>Your Partner in Digital Transformation</h1>
            <p>
              We bridge the gap between complex engineering and strategic business goals,
              delivering technology solutions that scale with your ambition.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/contact-us" variant="light">Schedule Strategy Call</ButtonLink>
              <ButtonLink href="#methodology" variant="outline" className='text-white border-white' >View Methodology</ButtonLink>
            </div>
          </div>
          <VisualPanel variant="warehouse" path="why" />
        </div>
      </section>

      <section className="section pale" id="methodology">
        <div className="container">
          <SectionHeader
            title="Core Advantages"
            text="Our systematic approach ensures that every line of code serves a strategic business purpose."
          />
          <div className="advantage-grid">
            <article className="advantage wide">
              <Iconer ><RiLightbulbFlashFill /></Iconer>
              <h3>Innovation</h3>
              <p>We engineer the future using AI integration and cloud-native architectures.</p>
              <div className="tag-row"><span>AI-First</span><span>Cloud Native</span></div>
              </article>
            <article className="advantage purple-panel">
              <Iconer className="bg-white/10" ><IoShieldCheckmarkOutline color="white" /></Iconer>
              <h3>Reliability</h3>
              <p>Enterprise-grade protocols ensure stable delivery for every deployment.</p>
            </article>
            <article className="advantage">
              <Iconer><LuCircleGauge /></Iconer>
              <h3>Scalability</h3><p>Modular systems expand from MVP to global scale without technical debt.</p>
            </article>
            <article style={{background:'#EFF4FF'}} className="advantage">
              <Iconer className="bg-white" ><FaUsers /></Iconer>
              <h3>Client-Centered</h3><p>We operate as an extension of your team at every milestone.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        {["50+ Projects Delivered", "24/7 Global Support", "98% Client Retention", "15+ Industries Served"].map(
          (item) => {
            const [value, ...label] = item.split(" ");
            return <div key={item}><strong>{value}</strong><span>{label.join(" ")}</span></div>;
          }
        )}
      </section>

      <section className="section pale">
        <div className="container case-card">
          <VisualPanel variant="warehouse" path="warehouse" />
          <div>
            <span className="eyebrow">Featured Work</span>
            <h2>Global Logistics App</h2>
            <p>
              We revolutionized real-time tracking for a global logistics leader, reducing
              processing latency by 65% and integrating predictive analytics for supply chain
              optimization.
            </p>
            <blockquote>
              “{brand.name} re-engineered our operational heart. The scalability of the platform
              opened new regions without downtime.”
            </blockquote>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to scale?"
        text={`Join the companies transforming operations through ${brand.name}'s strategic precision.`}
      />
    </SiteShell>
  );
}
