import { Link } from "react-router-dom";
import type { LinkButtonProps } from "./LinkButton.types";
import "./LinkButton.scss";

const LinkButton = ({ to, className, hasBackground = false, children }: LinkButtonProps) => {
  return (
    <Link to={to} className={`${hasBackground ? "link-button-with-background" : "link-button"} ${className}`}>
      {children}
    </Link>
  );
};

export default LinkButton;
