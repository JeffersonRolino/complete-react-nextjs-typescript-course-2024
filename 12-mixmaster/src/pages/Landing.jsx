import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  return "something";
};

function Landing() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1>Landing</h1>
    </div>
  );
}

export default Landing;
