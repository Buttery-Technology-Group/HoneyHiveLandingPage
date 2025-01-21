import { LinkButton } from "../../Global/LinkButton";
import screenshots from "../../../assets/images/screenshots.png";
import "./HomeScreenshots.scss";

const HomeScreenshots = () => (
  <section className="home-screenshots">
    <img src={screenshots} alt="Honey Screenshots" className="screenshots" />
    <div className="content">
      <h1 className="title">
        Honey was built for <span>you</span>.
      </h1>
      <p>
        Honey helps you get stuff done quickly and efficiently. This is because Honey stays in constant communication
        with the Hive, which means its intelligence, contextual awareness, and understanding grow more organically, such
        as when nodes with new or improved functionality get connected to the Hive. Enterprise customers gain a clearer
        path to ROI than through traditional LLMs, both short-term and long-term.
      </p>
      <p>
        Honey is the only AI you’ll ever need. It has a suite of governance and core technologies built-in for{" "}
        <strong>free</strong>. Also, we built the best foundation to build AI functionality off of, which means you
        don’t have to worry about the technology and can focus on your customers and improving functionality.
      </p>
      <div className="buttons">
        <LinkButton to="/sign-up" hasBackground>
          Get started for free
        </LinkButton>
        <LinkButton to="/">Schedule a demo</LinkButton>
      </div>
    </div>
  </section>
);

export default HomeScreenshots;
