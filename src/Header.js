import { useContext } from "react";
import { UserContext } from "./UserContext";

const Header = () => {
  const { userName } = useContext(UserContext);

  return (
    <header>
      <h1>Welcome, {userName}!</h1>
    </header>
  );
};

export default Header;
