import { LinkButton } from "../../Global/LinkButton";
import visualAuditTrail from "../../../assets/images/visual-audit-trail.svg";
import "./HomeFeatures.scss";

const HomeFeatures = () => (
  <section className="home-features">
    <div className="content">
      <strong className="super-headline">Trust the source, by defining the truth.</strong>
      <h1 className="title">
        <span>Define</span> the narrative.
      </h1>
      <p>
        Honey is always making sure those connected to the Hive are communicating against known sources-of-truth and
        evaluating their trustworthiness. This gives greater control and security for the Honey platform. Enterprise
        customers get even deeper control through customizing the sources-of-truth Honey uses for their Hive.
      </p>
      <LinkButton to="/sign-up" hasBackground>
        Start defining truth
      </LinkButton>
    </div>
    <img src={visualAuditTrail} alt="Honey — Visual Audit Trail" />
  </section>
);

export default HomeFeatures;
