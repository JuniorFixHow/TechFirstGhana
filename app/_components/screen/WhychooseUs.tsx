import SiteShell from "../layout/SiteShell";
import Advantages from "../sections/why/Advantages";
import DigitalTransformation from "../sections/why/DigitalTransformation";
import FeaturedApp from "../sections/why/FeaturedApp";
import Ratings from "../sections/why/Ratings";
import ReadyToScale from "../sections/why/ReadyToScale";

const WhychooseUs = () => {
  return (
    <SiteShell activePath='/why-choose-us'>
        <DigitalTransformation/>
        <Advantages/>
        <Ratings/>
        <FeaturedApp/>
        <ReadyToScale/>
    </SiteShell>
  )
}

export default WhychooseUs