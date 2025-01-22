import type { ComponentProps } from "react";
import styles from "./Button.module.scss";

const Button = ({ children, ...props }: ComponentProps<"button">) => (
  <button type="submit" className={styles.button} {...props}>
    {children}
  </button>
);

export default Button;
