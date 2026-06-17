import { services } from "@/lib/site-data";
import Iconer from "../ui/Iconer";

export function ServiceGrid() {
  return (
    <div className="service-grid">
      {services.map((service) => (
        <article className="service-card" key={service.title}>
          <Iconer>{service.icon}</Iconer>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
          <a href="/services">Learn More →</a>
        </article>
      ))}
    </div>
  );
}
