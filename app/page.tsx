import { CtaBand } from "@/app/_components/sections/CtaBand";
import { SectionHeader } from "@/app/_components/sections/SectionHeader";
import { ServiceGrid } from "@/app/_components/sections/ServiceGrid";
import { SiteShell } from "@/app/_components/layout/SiteShell";
import { ButtonLink } from "@/app/_components/ui/ButtonLink";
import { VisualPanel } from "@/app/_components/ui/VisualPanel";
import { brand } from "@/lib/site-data";
import { MdOutlineShield } from "react-icons/md";
import { LuCircleGauge } from "react-icons/lu";

export default function Home() {
  return (
    <SiteShell activePath="/">
      <section className="hero hero-light">
        <div className="container hero-grid">
          <div>
            <span className="pill">Trusted by 500+ Corporate Partners</span>
            <h1>Technology Solutions That Drive Business Growth</h1>
            <p>
              Scale your operations with precision-engineered software, cloud
              infrastructure, and strategic IT consulting designed for the modern enterprise.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/contact-us">Get Started</ButtonLink>
              <ButtonLink href="/contact-us" variant="secondary">
                Book a Consultation
              </ButtonLink>
            </div>
          </div>
          <VisualPanel variant="office" path="office" /> 
        </div>
      </section>

      <section className="section split-section">
        <div className="container split-grid">
          <div className="image-card">
            <VisualPanel variant="dashboard" path="home2" />
            <div className="float-card">
              <strong>12+ Years</strong>
              <span>Of Excellence in IT Innovation</span>
            </div>
          </div>
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2>Strategic Partners in Your Digital Transformation</h2>
            <p>
              {brand.name} is not just a service provider; we are an extension of your business.
              We bridge the gap between complex technological challenges and high-performance
              business outcomes through architectural stability and rigorous innovation.
            </p>
            <ul className="check-list">
              <li>Data-driven strategy and architectural precision</li>
              <li>Agile development cycles for rapid deployment</li>
              <li>Continuous support and infrastructure monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section pale">
        <div className="container">
          <SectionHeader
            title="Our Core Expertise"
            text="From enterprise software to cloud migrations, we provide the technical foundation for scalable success."
          />
          <ServiceGrid />
        </div>
      </section>

      <section className="trust-band">
        <div className="container trust-grid">
          <div>
            <h2>Why Leading Companies Trust {brand.shortName}</h2>
            <p>
              We bring a unique blend of corporate discipline and startup agility to every project,
              ensuring your tech stack is an asset, not a liability.
            </p>
            <div className="mini-grid">
              <div className='flex flex-col gap-2' >
                <MdOutlineShield color='white' />
                <strong>Rock-Solid Security</strong>
                <span>Enterprise-grade protection integrated into every layer.</span>
              </div>
              <div className='flex flex-col gap-2' >
                <LuCircleGauge color='white' />
                <strong>Rapid Innovation</strong>
                <span>Faster time-to-market without compromising quality.</span>
              </div>
            </div>
          </div>
          <div className="metric-stack">
            <div>
              <strong>98%</strong>
              <span>Client Retention</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Managed Support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            title="Our Strategic Roadmap"
            text="A systematic approach to transforming your vision into high-performance reality."
          />
          <div className="roadmap">
            {["Consultation", "Architecture", "Development", "Testing", "Launch"].map(
              (step, index) => (
                <div key={step}>
                  <span>{index + 1}</span>
                  <strong>{step}</strong>
                  <p>
                    {index === 0
                      ? "Deep dive into goals and pain points."
                      : "Focused execution with transparent reporting."}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section pale">
        <div className="container">
          <SectionHeader title="What Our Partners Say" />
          <div className="testimonial-grid">
            {["Marcus Thorne", "Elena Rodriguez", "David Chen"].map((name) => (
              <article className="testimonial-card" key={name}>
                <p>
                  “{brand.name} transformed our legacy systems into a modern cloud foundation.
                  Their precision is unmatched.”
                </p>
                <strong>{name}</strong>
                <span>Technology Leader</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
