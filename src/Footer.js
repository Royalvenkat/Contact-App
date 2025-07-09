import { useContext } from "react";
import { UserContext } from "./UserContext";

const Footer = () => {
  const { userName } = useContext(UserContext);

  return <footer>Logged in as: {userName}</footer>;
};

export default Footer;
