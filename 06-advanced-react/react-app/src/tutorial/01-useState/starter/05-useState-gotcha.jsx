import { useState } from "react";

const UseStateGotcha = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
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
