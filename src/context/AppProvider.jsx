import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const usersTypes = {
    MESERO: "mesero",
    CHEF: "chef",
    ADMIN: "admin",
  };

  return (
    <AppContext.Provider
      value={{
        email,
        password,
        userType,
        isUserLoggedIn,
        usersTypes,
        setEmail,
        setPassword,
        setUserType,
        setIsUserLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
