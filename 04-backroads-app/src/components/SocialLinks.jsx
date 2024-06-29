import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

function SocialLinks({ ulCssClass, linkCssClass }) {
  return (
    <ul className={ulCssClass}>
      {socialLinks.map((link) => {
        return (
          <SocialLink
            key={link.id}
            href={link.href}
            linkCssClass={linkCssClass}
            icon={link.icon}
          />
        );
      })}
    </ul>
  );
}

export default SocialLinks;
