import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";

const sigleCocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${sigleCocktailSearchUrl}${id}`);

  return { id, data };
};

function Cocktail() {
  const { id, data } = useLoaderData();

  return (
    <div>
      <h1>Cocktail</h1>
    </div>
  );
}

export default Cocktail;
