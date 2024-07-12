import { useGlobalContext } from "../Context";

function Home() {
  const { openSidebar, openModal } = useGlobalContext();

  console.log(openSidebar, openModal);

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default Home;
