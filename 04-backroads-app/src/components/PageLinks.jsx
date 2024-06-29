import { pageLinks } from "../data";

function PageLinks({ ulCssClass, ulCssId, linkCssClass }) {
  return (
    <ul className={ulCssClass} id={ulCssId}>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={linkCssClass}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default PageLinks;
