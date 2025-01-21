import honey from "../../../assets/logos/honey.png";
import melting from "../../../assets/images/melting-footer.svg";
import { Button } from "../../Global/Button";
import "./HomeFooter.scss";
import useModal from "../../../hooks/useModal";
import { Modal } from "../../Global/Modal";

const HomeFooter = () => {
  const { modal, button } = useModal();

  return (
    <div className="home-footer">
      <div className="wrapper">
        <img src={honey} alt="Honey" className="honey" />
        <h1 className="title">
          <span>Join</span> Honey today!
        </h1>
        <Button ref={button}>Join Waitlist</Button>
        <Modal ref={modal} />
      </div>
      <img src={melting} alt="Melting" className="melting" />
      <p className="copyright">© 2024 Buttery Technology Inc.</p>
    </div>
  );
};

export default HomeFooter;
