import { useState, type FC } from "react";
import HeaderUI from "../ui/header";

const Header: FC = () => {
  const [input, setInput] = useState("");

  return <HeaderUI input={input} setInput={setInput} />;
};

export default Header;
