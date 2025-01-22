import { Button, LinkButton, Modal } from "../../Global";
import { useModal } from "../../../hooks";
import screenshots from "../../../assets/images/screenshots.png";
import styles from "./HomeScreenshots.module.scss";

const HomeScreenshots = () => {
  const { modal, button } = useModal();

  return (
    <>
      <section className={styles.homeScreenshots}>
        <img src={screenshots} alt="Honey Screenshots" className={styles.screenshots} />
        <div className={styles.content}>
          <h1 className={styles.title}>
            Honey was built for <span>you</span>.
          </h1>
          <p>
            Honey helps you get stuff done quickly and efficiently. This is because Honey stays in constant
            communication with the Hive, which means its intelligence, contextual awareness, and understanding grow more
            organically, such as when nodes with new or improved functionality get connected to the Hive. Enterprise
            customers gain a clearer path to ROI than through traditional LLMs, both short-term and long-term.
          </p>
          <p>
            Honey is the only AI you’ll ever need. It has a suite of governance and core technologies built-in for{" "}
            <strong>free</strong>. Also, we built the best foundation to build AI functionality off of, which means you
            don’t have to worry about the technology and can focus on your customers and improving functionality.
          </p>
          <div className={styles.buttons}>
            <Button ref={button}>Join Waitlist</Button>
            <LinkButton href="https://calendly.com/buttery-jonathan">Schedule a demo</LinkButton>
          </div>
        </div>
      </section>
      <Modal ref={modal} />
    </>
  );
};

export default HomeScreenshots;
