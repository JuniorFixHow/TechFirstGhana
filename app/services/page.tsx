import { SiteShell } from "@/app/_components/layout/SiteShell";
import { SectionHeader } from "@/app/_components/sections/SectionHeader";
import { ButtonLink } from "@/app/_components/ui/ButtonLink";
import { VisualPanel } from "@/app/_components/ui/VisualPanel";
import { brand } from "@/lib/site-data";
import { GrTechnology } from "react-icons/gr";
import { IoIosCheckmarkCircleOutline, IoIosCloudOutline } from "react-icons/io";
import { IoCode, IoPhonePortraitOutline } from "react-icons/io5";
import Iconer from "../_components/ui/Iconer";

export default function ServicesPage() {
  return (
    <SiteShell activePath="/services">
      <section className="hero hero-light">
        <div className="container hero-grid">
          <div>
            <span className="pill">Our Expertise</span>
            <h1>Scalable Solutions for Every Business Need</h1>
            <p>
              At {brand.name}, we bridge the gap between complex engineering and strategic business
              goals. Our systematic approach ensures every line of code drives enterprise value.
            </p>
            <ButtonLink href="#services">View All Services →</ButtonLink>
          </div>
          <VisualPanel variant="office" path="services" />
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <SectionHeader
            title="Our Core Service Pillars"
            text="Precision-engineered solutions designed to scale with your ambition."
          />
          <div className="service-detail-grid">
            <article className="service-detail large">
              <span className="icon-chip purple"><IoCode color="white" /></span>
              <h3>Software &amp; Web Development</h3>
              <p>
                We craft robust web applications and custom software architectures using modern
                stacks and agile methodologies.
              </p>
              <div className="tag-row"><span>React &amp; Next.js</span><span>Python Backend</span><span>Enterprise API</span></div>
              <ButtonLink href="/contact-us">Request a Quote</ButtonLink>
            </article>
            <article className="service-detail purple-panel">
              <span className="icon-chip"><GrTechnology /></span>
              <h3>IT Consulting</h3>
              <p>Strategic roadmap planning and infrastructure auditing aligned to long-term growth.</p>
              <div className="flex flex-col gap-1.5">
                <div className="flex gap-1 items-center">
                  <IoIosCheckmarkCircleOutline color="white" size={18} />
                  <span>Digital Transformation</span>
                </div>
                <div className="flex gap-1 items-center">
                  <IoIosCheckmarkCircleOutline color="white" size={18} />
                  <span>Infrastructure Audit</span>
                </div>
                <div className="flex gap-1 items-center">
                  <IoIosCheckmarkCircleOutline color="white" size={18} />
                  <span>Security Strategy</span>
                </div>
                <ButtonLink className='w-fit' href="/contact-us" variant="secondary">Request a Quote</ButtonLink>
              </div>
            </article>
            <article className="service-detail outline">
              <Iconer><IoIosCloudOutline color='#86367E' /></Iconer>
              <h3>Microsoft 365 &amp; Cloud</h3>
              <p>Complete ecosystem integration. We specialize in Azure migration, Microsoft 365 optimization, and hybrid cloud management for secure remote collaboration.</p>
              <div className="tag-row"><span>Azure Migration</span><span>SharePoint</span><span>Cloud Mgmt</span></div>
              <ButtonLink href="/contact-us" variant="dark">Request a Quote</ButtonLink>
            </article>
            <article className="service-detail blue-panel">
              <div>
                <span className="icon-chip purple"><IoPhonePortraitOutline color="white" /></span>
                <h3>Mobile App Development</h3>
                <p>Native and cross-platform mobile experiences with intuitive UX and high performance.</p>
                <div className="tag-row"><span>iOS Native</span><span>Android</span><span>Flutter</span></div>
                <ButtonLink href="/contact-us">Request a Quote</ButtonLink>
              </div>
              <VisualPanel variant="phone" path="phone" />
            </article>
          </div>
        </div>
      </section>

      <section className="infra-band">
        <div className="container infra-card">
          <div>
            <h2>Global Infrastructure Readiness</h2>
            <p>Real-time status monitoring for distributed cloud networks.</p>
          </div>
          <strong>99.99%<span>Uptime SLA</span></strong>
          <strong>&lt;12ms<span>Avg Latency</span></strong>
          <strong>24/7<span>Global NOC</span></strong>
        </div>
      </section>

      <section className="section pale">
        <div className="container split-grid">
          <div>
            <h2>Engineered for Precision</h2>
            <ol className="process-list">
              <li><strong>Architectural Design</strong><span>Every project starts with a deep technical audit.</span></li>
              <li><strong>Agile Execution</strong><span>Rapid prototyping keeps stakeholders aligned.</span></li>
              <li><strong>QA &amp; Load Testing</strong><span>Stress testing keeps applications resilient.</span></li>
            </ol>
          </div>
          <div className="dashboard-card">
            <VisualPanel variant="dashboard" path="visualization" />
            <div className="progress-line"><span /></div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
