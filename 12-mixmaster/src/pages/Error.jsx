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
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -4rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--grey-500);
  }

  a {
    color: var(--primary-500);
    text-transform: capitalize;
    font-weight: 600;
  }
`;

export default Error;
