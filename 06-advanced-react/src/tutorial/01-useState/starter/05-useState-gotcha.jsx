import { useState } from "react";

const UseStateGotcha = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log("Clicked de button");
      setCounter((prevState) => {
        return prevState + 1;
      });
    }, 3000);
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
