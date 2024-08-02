import { Hero } from "../components";
import { customFetch } from "../utils";

const url = "/products?featured=true";

export const loader = async () => {
  const response = await customFetch.get(url);
  const products = response.data.data;
  return { products };
};

function Landing() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default Landing;
