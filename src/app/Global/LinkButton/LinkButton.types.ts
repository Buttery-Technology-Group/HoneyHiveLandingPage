import type { RefAttributes } from "react";
import type { LinkProps } from "react-router-dom";

export type LinkButtonProps = LinkProps &
  RefAttributes<HTMLAnchorElement> & {
    hasBackground?: boolean;
  };
