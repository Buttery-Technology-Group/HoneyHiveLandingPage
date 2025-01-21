import { Button } from "../../Global/Button";
import honey from "../../../assets/logos/honey.png";
import useModal from "../../../hooks/useModal";
import "./HomeHero.scss";
import { Modal } from "../../Global/Modal";

const HomeHero = () => {
  const { modal, button } = useModal();

  return (
    <main className="home-hero">
      <img src={honey} alt="Honey" className="honey" />
      <h1 className="title">
        Disrupt the <span className="greenish">future</span> with the world’s first{" "}
        <span className="blueish">distributed AI</span> platform
      </h1>
      <p className="intro">
        Build, grow, or integrate AI into your business with Honey so fast it’ll feel buttery smooth. Honey is the only
        platform for both online and enterprise customers where transparency, privacy, and trust are metrics you can
        verify. Oh, and did we say it’s super fast? Yeah, it’s super fast.
      </p>
      <Button ref={button}>Join Waitlist</Button>
      <Modal ref={modal} />
    </main>
  );
};

export default HomeHero;
