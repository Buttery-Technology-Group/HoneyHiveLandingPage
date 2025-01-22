import { Button, Modal } from "../../Global";
import { useModal } from "../../../hooks";
import visualAuditTrail from "../../../assets/images/visual-audit-trail.svg";
import styles from "./HomeFeatures.module.scss";

const HomeFeatures = () => {
  const { modal, button } = useModal();

  return (
    <>
      <section className={styles.homeFeatures}>
        <div className={styles.content}>
          <strong className={styles.superHeadline}>Trust the source, by defining the truth.</strong>
          <h1 className={styles.title}>
            <span>Define</span> the narrative.
          </h1>
          <p>
            Honey is always making sure those connected to the Hive are communicating against known sources-of-truth and
            evaluating their trustworthiness. This gives greater control and security for the Honey platform. Enterprise
            customers get even deeper control through customizing the sources-of-truth Honey uses for their Hive.
          </p>
          <Button ref={button}>Join Waitlist</Button>
        </div>
        <img src={visualAuditTrail} alt="Honey — Visual Audit Trail" />
      </section>
      <Modal ref={modal} />
    </>
  );
};

export default HomeFeatures;
