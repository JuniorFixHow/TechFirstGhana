import { ButtonLink } from "@/app/_components/ui/ButtonLink";

type CtaBandProps = {
  title?: string;
  text?: string;
};

export function CtaBand({
  title = "Ready to Scale Your Business Technology?",
  text = "Book a free strategy session with our senior consultants today.",
}: CtaBandProps) {
  return (
    <section className="section">
      <div className="container cta-band">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <ButtonLink href="/contact-us" variant="light">
            Get Started Now
          </ButtonLink>
          <ButtonLink href="/contact-us" variant="dark">
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
