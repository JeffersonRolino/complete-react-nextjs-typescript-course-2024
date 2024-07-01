import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("Component was rendered...");

  return (
    <div>
      {toggle && <FirstComponent />}
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
    </div>
  );
};

const FirstComponent = () => {
  useEffect(() => {
    const someFunction = () => {
      console.log("Function was called...");
    };
    window.addEventListener("scroll", someFunction);
    return () => window.removeEventListener("scroll", someFunction);
  }, []);

  return <h3>First Component</h3>;
};

export default CleanupFunction;
