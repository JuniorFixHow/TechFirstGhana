import SiteShell from "../layout/SiteShell";
import BusinessNeed from "../sections/services/BusinessNeed";
import Precision from "../sections/services/Precision";
import Readiness from "../sections/services/Readiness";
import ServicePillars from "../sections/services/ServicePillars";

const Services = () => {
  return (
    <SiteShell activePath="/services" >
        <BusinessNeed />
        <ServicePillars />
        <Readiness />
        <Precision />
    </SiteShell>
  )
}

export default Services