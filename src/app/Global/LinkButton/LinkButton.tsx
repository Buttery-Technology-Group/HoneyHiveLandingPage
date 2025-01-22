import { type ComponentProps } from "react";
import styles from "./LinkButton.module.scss";

const LinkButton = ({ href, className, children, ...props }: ComponentProps<"a">) => {
  const classNames = [styles.linkButton];
  if (className) classNames.push(className);
  const cls = classNames.join(" ");

  return (
    <a href={href} target="_blank" className={cls} {...props}>
      {children}
    </a>
  );
};

export default LinkButton;
