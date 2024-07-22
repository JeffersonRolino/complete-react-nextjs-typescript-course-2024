import styled from "styled-components";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

function Error() {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={img} alt="not found" />
        <h3>Ohh!</h3>
        <p>Sorry, we can't seem to find the page you are looking for...</p>
        <Link to="/">back home</Link>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h3>Something went wrong</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    color: var(--grey-500);
    margin-top: 2rem;
  }
`;

export default Error;
