import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div>
      <h1>Home Layout</h1>
      <nav>navbar</nav>
      <Outlet />
    </div>
  );
}

export default HomeLayout;
