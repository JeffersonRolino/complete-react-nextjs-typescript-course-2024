import { Link } from "react-router-dom";

function HomeLayout() {
  return (
    <div>
      <h1>Home Layout</h1>
      <Link to="/about">About</Link>
    </div>
  );
}

export default HomeLayout;
