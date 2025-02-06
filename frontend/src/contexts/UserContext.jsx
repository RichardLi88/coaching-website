import { useState, createContext } from "react";

export const userContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  function userContextLogout() {
    setUser(null);
    localStorage.setItem("user", null);
  }

  function userContextLogin(data) {
    console.log(data);
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  }

  function userContextGetUser() {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }
  return (
    <userContext.Provider
      value={{ user, userContextLogout, userContextLogin, userContextGetUser }}
    >
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;
