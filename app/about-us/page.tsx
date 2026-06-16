import { SiteShell } from "@/app/_components/layout/SiteShell";
import { SectionHeader } from "@/app/_components/sections/SectionHeader";
import { VisualPanel } from "@/app/_components/ui/VisualPanel";
import { brand } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <SiteShell activePath="/about-us">
      <section className="page-hero">
        <span className="eyebrow">Our Mission</span>
        <h1>Pioneering the Future of Technology</h1>
        <p>
          At {brand.name}, we bridge the gap between complex engineering and strategic business
          growth, delivering precision-driven solutions for tomorrow&apos;s leaders.
        </p>
        <div className="stat-row">
          <div><strong>150+</strong><span>Global Partners</span></div>
          <div><strong>12+</strong><span>Years of Innovation</span></div>
          <div><strong>99.9%</strong><span>Success Rate</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div className="image-card">
            <VisualPanel variant="office" path="about" />
            <div className="float-card">Since 2026<br />Building the digital foundation</div>
          </div>
          <div>
            <h2 className="purple-title">Our Journey</h2>
            <p>
              What started as a small team of passionate engineers has evolved into a growing
              technology partner. Our history is defined by a relentless pursuit of excellence and a
              commitment to solving difficult technical challenges.
            </p>
            <p>
              From cloud transformation to AI-driven analytics, our path has always been guided by
              the needs of our clients and the possibilities of the future.
            </p>
            <a className="text-link" href="/why-choose-us">Learn about our timeline →</a>
          </div>
        </div>
      </section>

      <section className="section pale">
        <div className="container">
          <SectionHeader
            title="Our Leadership"
            text="Visionaries dedicated to transforming technical potential into measurable business impact."
          />
          <div className="leader-grid">
            {["Matilda", "Junior"].map((name, index) => (
              <article className="leader-card" key={name}>
                <div className={`portrait portrait-${index + 1}`} />
                <div>
                  <h3>{name}</h3>
                  <span>Co-founder &amp; {index === 0 ? "CEO" : "CTO"}</span>
                  <p>
                    {index === 0
                      ? "With over 20 years in strategic operations, Matilda leads growth strategy and sustainable innovation."
                      : "A pioneer in distributed systems and AI, Junior oversees technical architecture and R&D."}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Core Pillars</h2>
          <p className="narrow-copy">
            The fundamental values that drive every decision we make and every product we build.
          </p>
          <div className="pillar-grid">
            {["Innovation", "Integrity", "Excellence"].map((pillar) => (
              <article className="service-card" key={pillar}>
                <span className="icon-chip">⌖</span>
                <h3>{pillar}</h3>
                <p>
                  We pursue reliable, future-ready technology with transparent communication and
                  operational discipline.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-band">
        “Our mission is to empower organizations with the technology and strategic insight required
        to redefine their industries and build a resilient future.”
        <span>{brand.name} Executive Board</span>
      </section>

      <section className="section pale">
        <div className="container culture-grid">
          <div>
            <h2>Our Culture</h2>
            <p>
              We foster radical candor, collaborative problem-solving, and continuous learning. At
              {brand.name}, talent is nurtured and curiosity is rewarded.
            </p>
            <ul className="check-list">
              <li>Collaborative DNA across every project.</li>
              <li>Continuous learning through quarterly upskilling.</li>
            </ul>
          </div>
          <div className="culture-stats">
            <div><strong>40%</strong><span>Female Leadership</span></div>
            <div><strong>25+</strong><span>Nationalities</span></div>
            <div><strong>92%</strong><span>Employee Satisfaction</span></div>
            <div><strong>5k+</strong><span>Coffee Cups / Month</span></div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
