import { Outlet } from "react-router-dom";
import { Header } from "../components";

function HomeLayout() {
  return (
    <>
      <Header>
        <span className="text-4xl text-primary">Comfy</span>
      </Header>
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
}

export default HomeLayout;
