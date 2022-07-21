import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [isUserLogIn, setIsUserLogIn] = useState(false);

  return (
    <AppContext.Provider
      value={{
        email,
        password,
        userType,
        isUserLogIn,
        setEmail,
        setPassword,
        setUserType,
        setIsUserLogIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
