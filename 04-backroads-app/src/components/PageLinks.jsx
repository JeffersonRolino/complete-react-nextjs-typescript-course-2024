import { pageLinks } from "../data";
import PageLink from "./PageLink";

function PageLinks({ ulCssClass, ulCssId, linkCssClass }) {
  return (
    <ul className={ulCssClass} id={ulCssId}>
      {pageLinks.map((link) => {
        return (
          <PageLink
            key={link.id}
            href={link.href}
            linkCssClass={linkCssClass}
            text={link.text}
          />
        );
      })}
    </ul>
  );
}

export default PageLinks;
