import { Link } from "react-router-dom";
import styled from "styled-components";

function CocktailCard({ id, image, name, info, glass }) {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          details
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default CocktailCard;
