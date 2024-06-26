import Blogs from "../Features/Blogs";
import Collaborations from "../Features/Collaborations";
import EIR from "../Features/EIR";
import Equity from "../Features/Equity";
import Featured from "../Features/Featured";
import Final from "../Features/Final";
import Focus from "../Features/Focus";
import Incubation from "../Features/Incubation";
import Innovations from "../Features/Innovations";
import Investors from "../Features/Investors";
import Network from "../Features/Network";
import Portfolio from "../Features/Portfolio";
import Quote from "../Features/Quote";
import Hero from "../Features/HeroPage";
import Footer from "../UI/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Quote />
      <Network />
      <Focus />
      <Innovations />
      <Incubation />
      <Portfolio />
      <Collaborations />
      <EIR />
      <Investors />
      <Equity />
      <Blogs />

      <Featured />
      <Final />

      <Footer />
    </div>
  );
}

export default Home;
