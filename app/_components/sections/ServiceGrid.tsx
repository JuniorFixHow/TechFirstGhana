import { services } from "@/lib/site-data";

export function ServiceGrid() {
  return (
    <div className="service-grid">
      {services.map((service) => (
        <article className="service-card" key={service.title}>
          <span className="icon-chip">{service.icon}</span>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
          <a href="/services">Learn More →</a>
        </article>
      ))}
    </div>
  );
}
