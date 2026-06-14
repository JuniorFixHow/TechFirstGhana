import { ContactForm } from "@/app/_components/forms/ContactForm";
import { SiteShell } from "@/app/_components/layout/SiteShell";
import { VisualPanel } from "@/app/_components/ui/VisualPanel";
import { brand } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <SiteShell activePath="/contact-us">
      <section className="contact-page">
        <div className="container">
          <div className="contact-intro">
            <h1>Get in Touch</h1>
            <p>
              Ready to accelerate your strategic precision? Reach out to our team for customized
              technology solutions.
            </p>
          </div>
          <div className="contact-grid">
            <ContactForm />
            <aside className="support-card">
              <h2>Global Support Network</h2>
              <VisualPanel variant="map" />
              <div className="contact-list">
                <p><span>▦</span><strong>Global HQ</strong>{brand.address}</p>
                <p><span>✉</span><strong>Email Us</strong>{brand.email}</p>
                <p><span>⌕</span><strong>Call Center</strong>{brand.phone}</p>
              </div>
              <hr />
              <h3>Follow Our Innovation</h3>
              <div className="social-circles"><span>⌘</span><span>▻</span><span>⌯</span><span>◎</span></div>
            </aside>
            <div className="reliability-card">
              <span className="icon-chip">◇</span>
              <p><strong>Reliability Guaranteed</strong>We respond to enterprise inquiries within 12 business hours.</p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
