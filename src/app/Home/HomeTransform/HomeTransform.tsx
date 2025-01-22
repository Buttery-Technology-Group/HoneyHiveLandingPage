import { Button, LinkButton, Modal } from "../../Global";
import { useModal } from "../../../hooks";
import transform from "../../../assets/images/transform.png";
import styles from "./HomeTransform.module.scss";

const HomeTransform = () => {
  const { modal, button } = useModal();

  return (
    <>
      <section className={styles.homeTransform}>
        <div className={styles.content}>
          <strong className={styles.superHeadline}>Do more, faster, verifiably, and securely.</strong>
          <h1 className={styles.title}>
            AI that <span>transforms</span> reality.
          </h1>
          <p>
            Honey is the first distributed AI platform that combines simplicity with power. Built for companies looking
            for a flexible scalable system that’s trustworthy and secure, Honey makes it easy to connect different AIs.
            Whether locally over a secure intranet or in remote locations, Honey provides the backbone for a continuous
            flow of communication and information. Its core constantly verifies the reliability and safety of all
            interactions, ensuring that decisions are based on solid, verifiable data.
          </p>
          <p>
            Already invested in an LLM server? No problem. Simply upload the LLM or connect it to start leveraging
            Honey’s amazing benefits.
          </p>
          <div className={styles.buttons}>
            <Button ref={button}>Join Waitlist</Button>
            <LinkButton href="https://calendly.com/buttery-jonathan">Schedule a demo</LinkButton>
          </div>
        </div>
        <img src={transform} alt="Honey transforms reality" />
      </section>
      <Modal ref={modal} />
    </>
  );
};

export default HomeTransform;
