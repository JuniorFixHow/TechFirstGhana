import { brand, footerLinks } from "@/lib/site-data";
import { Logo } from "@/app/_components/ui/Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>Strategic digital transformation for the modern enterprise.</p>
        </div>
        <div>
          <h3>Services</h3>
          {footerLinks.services.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </div>
        <div>
          <h3>Company</h3>
          {footerLinks.company.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            {brand.address}
            <br />
            {brand.email}
          </p>
          <div className="footer-icons" aria-label="Social links">
            <span>⌯</span>
            <span>✉</span>
            <span>⌕</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2026 {brand.name} Solutions. All rights reserved.</div>
    </footer>
  );
}
