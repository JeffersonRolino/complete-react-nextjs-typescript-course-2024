import { useGlobalContext } from "./context";

const App = () => {
  const { isSideBarOpen } = useGlobalContext();

  console.log(isSideBarOpen);

  return (
    <div>
      <h2>App</h2>
    </div>
  );
};
export default App;
