import { useContext } from "react";
import { UserContext } from "./UserContext";

const Profile = () => {
  const { userName, setUserName } = useContext(UserContext);

  const handleChange = () => {
<<<<<<< HEAD
    setUserName("Royal Venkatesh");
=======
    setUserName("Jane Smith");
>>>>>>> parent of 283b048 (changes in name)
  };

  return (
    <div>
      <p>Profile name: {userName}</p>
      <button onClick={handleChange}>Change Name</button>
    </div>
  );
};

export default Profile;
