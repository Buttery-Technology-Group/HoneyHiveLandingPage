import { HomeHero } from "./HomeHero";
import { HomeScreenshots } from "./HomeScreenshots";
import { HomeTransform } from "./HomeTransform";
import { HomeFeatures } from "./HomeFeatures";
import { HomeFooter } from "./HomeFooter";
import "./Home.scss";

const Home = () => (
  <div className="home">
    <HomeHero />
    <HomeScreenshots />
    <HomeTransform />
    <HomeFeatures />
    <HomeFooter />
  </div>
);

export default Home;
