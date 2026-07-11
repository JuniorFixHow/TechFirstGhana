import SiteShell from "../layout/SiteShell";
import CorePillars from "../sections/About/CorePillars";
import Culture from "../sections/About/Culture";
import Journey from "../sections/About/Journey";
import Leadership from "../sections/About/Leadership";
import Mission from "../sections/About/Mission";
import MissionStatement from "../sections/About/MissionStatement";

const AboutUs = () => {
  return (
    <SiteShell activePath='/about'>
        <Mission/>
        <Journey/>
        <Leadership/>
        <CorePillars/>
        <MissionStatement/>
        <Culture/>
    </SiteShell>
  )
}

export default AboutUs