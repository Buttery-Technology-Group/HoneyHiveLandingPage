import type { ComponentProps } from "react";
import styles from "./Input.module.scss";

const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  ...props
}: ComponentProps<"input"> & {
  error: string | null;
}) => (
  <div className={styles.wrapper}>
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={styles.input}
      {...props}
    />
    {error && <p className={styles.error}>{error}</p>}
  </div>
);

export default Input;
