import type { ReactNode, FC } from "react";

type IconPropsType = {
  children: ReactNode;
};

const Icon: FC<IconPropsType> = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    {children}
  </svg>
);

export default Icon;
