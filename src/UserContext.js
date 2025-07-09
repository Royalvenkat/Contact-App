import { createContext, useState } from "react";

// Create context
export const UserContext = createContext();

// Create provider
export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("John Doe");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
