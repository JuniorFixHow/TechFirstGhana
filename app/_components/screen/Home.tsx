import SiteShell from "../layout/SiteShell";
import Expertise from "../sections/Home/Expertise";
import Landing from "../sections/Home/Landing";
import Roadmap from "../sections/Home/Roadmap";
import Scale from "../sections/Home/Scale";
import Testimonials from "../sections/Home/Testimonials";
import Trust from "../sections/Home/Trust";
import WhoWeARe from "../sections/Home/WhoWeARe";

const Home = () => {
  return (
    <SiteShell activePath='/'>
        <Landing />
        <WhoWeARe />
        <Expertise />
        <Trust />
        <Roadmap />
        <Testimonials />
        <Scale />
    </SiteShell>
  )
}

export default Home