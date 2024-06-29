import { socialLinks } from "../data";

function SocialLinks({ ulCssClass, linkCssClass }) {
  return (
    <ul className={ulCssClass}>
      {socialLinks.map((link) => {
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              className={linkCssClass}
              rel="noreferrer"
            >
              <i className={link.icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
