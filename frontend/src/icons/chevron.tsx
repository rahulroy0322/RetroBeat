import type { FC } from "react";
import Icon from "./main";

type ChevronIconPropsType = {
  open: boolean;
};

const ChevronIcon: FC<ChevronIconPropsType> = ({ open }) => (
  <Icon>
    {open ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
      />
    )}
  </Icon>
);

export default ChevronIcon;
