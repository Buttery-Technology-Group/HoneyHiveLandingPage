import { forwardRef } from "react";
import { Form } from "../Form";
import "./Modal.scss";

const Modal = forwardRef<HTMLDivElement>((_props, ref) => (
  <div className="modal-container" ref={ref}>
    <div className="modal">
      <h1 className="modal-title">Join Waitlist 🐝</h1>
      <Form />
    </div>
  </div>
));

Modal.displayName = "Modal";

export default Modal;
