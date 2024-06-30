import { useState } from "react";

const UseStateGotcha = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((currentState) => {
      const newState = currentState + 1;
      console.log(newState);
      return newState;
    });
  };

  return (
    <div>
      <h2>useState Gotcha</h2>
      <h5>You clicked {counter} times...</h5>
      <button className="btn" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default UseStateGotcha;
