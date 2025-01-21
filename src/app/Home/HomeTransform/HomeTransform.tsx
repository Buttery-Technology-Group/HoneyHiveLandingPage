import { LinkButton } from "../../Global/LinkButton";
import transform from "../../../assets/images/transform.png";
import "./HomeTransform.scss";
import { Link } from "react-router-dom";

const HomeTransform = () => (
  <section className="home-transform">
    <div className="content">
      <strong className="super-headline">Do more, faster, verifiably, and securely.</strong>
      <h1 className="title">
        AI that <span>transforms</span> reality.
      </h1>
      <p>
        Honey is the first distributed AI platform that combines simplicity with power. Built for companies looking for
        a flexible scalable system that’s trustworthy and secure, Honey makes it easy to connect different AIs. Whether
        locally over a secure intranet or in remote locations, Honey provides the backbone for a continuous flow of
        communication and information. Its core constantly verifies the reliability and safety of all interactions,
        ensuring that decisions are based on solid, verifiable data.
      </p>
      <p>
        Already invested in an LLM server? No problem. Simply upload the LLM or connect it to start leveraging Honey’s
        amazing benefits.{" "}
        <Link to="/" className="link">
          Learn more
        </Link>
        .
      </p>
      <div className="buttons">
        <LinkButton to="/sign-up" hasBackground>
          Get started for free
        </LinkButton>
        <LinkButton to="/">Schedule a demo</LinkButton>
      </div>
    </div>
    <img src={transform} alt="Honey transforms reality" />
  </section>
);

export default HomeTransform;
