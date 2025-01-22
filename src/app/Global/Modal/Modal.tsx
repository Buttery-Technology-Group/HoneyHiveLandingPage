import { forwardRef } from "react";
import { Form } from "../Form";
import styles from "./Modal.module.scss";

const Modal = forwardRef<HTMLDivElement>((_props, ref) => (
  <div className={styles.container} ref={ref}>
    <div className={styles.modal}>
      <Form />
    </div>
  </div>
));

Modal.displayName = "Modal";

export default Modal;
