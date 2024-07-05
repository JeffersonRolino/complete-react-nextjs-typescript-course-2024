import { useState, createContext, useContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

//custom hook
export const useAppContext = () => useContext(NavbarContext);

function Navbar() {
  const [user, setUser] = useState({ name: "Peter" });

  const logout = () => {
    setUser(null);
  };

  const login = () => {
    setUser({ name: "Peter" });
  };

  return (
    <NavbarContext.Provider value={{ user, logout, login }}>
      <nav className="context-api-navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
}

export default Navbar;
