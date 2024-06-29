function PageLink({ href, linkCssClass, text }) {
  return (
    <li>
      <a href={href} className={linkCssClass}>
        {text}
      </a>
    </li>
  );
}

export default PageLink;
