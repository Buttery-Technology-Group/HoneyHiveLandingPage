import { forwardRef } from "react";
import type { ButtonProps } from "./Button.types";
import "./Button.scss";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, ref) => {
  const classNames = ["button"];
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
