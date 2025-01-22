import { type ComponentProps, forwardRef } from "react";
import styles from "./Button.module.scss";

const Button = forwardRef<HTMLButtonElement, ComponentProps<"button">>(({ className, children, ...props }, ref) => {
  const classNames = [styles.button];
  if (className) classNames.push(className);
  const cls = classNames.join(" ");

  return (
    <button ref={ref} className={cls} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
