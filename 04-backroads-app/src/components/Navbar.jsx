import logo from "../images/logo.svg";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks
          ulCssClass="nav-links"
          ulCssId="nav-links"
          linkCssClass="nav-link"
        />

        <SocialLinks ulCssClass="nav-icons" linkCssClass="nav-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
