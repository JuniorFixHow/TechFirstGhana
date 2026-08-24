import SiteShell from "../layout/SiteShell";
import CareersInfo from "../sections/careers/CareersInfo";
import Internship from "../sections/careers/Internship";

const Careers = () => {
  return (
    <SiteShell activePath='/careers'>
        <Internship/>
        <CareersInfo/>
    </SiteShell>
  )
}

export default Careers