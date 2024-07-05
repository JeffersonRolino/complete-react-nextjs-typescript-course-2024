import { useState } from "react";
import NavLinks from "./NavLinks";

function Navbar() {
  const [user, setUser] = useState({ name: "Peter" });

  const logout = () => {
    setUser(null);
  };

  const login = () => {
    setUser({ name: "Peter" });
  };

  return (
    <nav className="context-api-navbar">
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={logout} login={login} />
    </nav>
  );
}

export default Navbar;
