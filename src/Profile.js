import { useContext } from "react";
import { UserContext } from "./UserContext";

const Profile = () => {
  const { userName, setUserName } = useContext(UserContext);

  const handleChange = () => {
    setUserName("Jane Smith");
  };

  return (
    <div>
      <p>Profile name: {userName}</p>
      <button onClick={handleChange}>Change Name</button>
      <p>New hello</p>
    </div>
  );
};

export default Profile;
