import { useState } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("The component was rendered...");
    // So be careful, because if you change the state here
    // you will have a infinite loop: Error: To many renders...
    // setValue(value + 1);
  };

  // This function will be called every time
  // the component renders and re-renders...
  sayHello();

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
