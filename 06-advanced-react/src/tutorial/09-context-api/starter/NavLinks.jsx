import UserContainer from "./UserContainer";

function NavLinks() {
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
      <UserContainer />
    </div>
  );
}

export default NavLinks;
