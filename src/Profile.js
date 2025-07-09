import { useContext } from "react";
import { UserContext } from "./UserContext";

const Profile = () => {
  const { userName, setUserName } = useContext(UserContext);

  const handleChange = () => {
<<<<<<< HEAD
    setUserName("Jane venkat");
=======
    setUserName("Royal Venkatesh");
>>>>>>> main
  };

  return (
    <div>
      <p>Profile name: {userName}</p>
      <button onClick={handleChange}>Change Name</button>
    </div>
  );
};

export default Profile;
