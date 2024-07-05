import { useContext } from "react";
import { NavbarContext } from "./Navbar";

function UserContainer() {
  const { user, logout, login } = useContext(NavbarContext);

  return (
    <div className="context-api-user-container">
      {user ? (
        <div className="context-api-user-container">
          <p>Hello There, {user?.name?.toUpperCase()}</p>{" "}
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="context-api-user-container">
          <p>Please Login</p>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default UserContainer;
