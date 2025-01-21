import type { ComponentProps } from "react";
import "./Button.scss";

type ButtonProps = ComponentProps<"button">;

const Button = ({ children, ...props }: ButtonProps) => (
  <button type="submit" className="form-button" {...props}>
    {children}
  </button>
);

export default Button;
