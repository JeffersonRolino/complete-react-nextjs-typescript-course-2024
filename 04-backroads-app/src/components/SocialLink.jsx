function SocialLink({ href, linkCssClass, icon }) {
  return (
    <li>
      <a href={href} target="_blank" className={linkCssClass} rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
}

export default SocialLink;
