import UserContainer from "./UserContainer";

function NavLinks({ user, logout, login }) {
  return (
    <div className="context-api-nav-container">
      <ul className="context-api-links-container">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout} login={login} />
    </div>
  );
}

export default NavLinks;
