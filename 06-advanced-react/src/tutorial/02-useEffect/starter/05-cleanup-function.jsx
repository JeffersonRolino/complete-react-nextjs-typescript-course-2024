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
    console.log("Use Effect Called...");
    const id = setInterval(() => {
      console.log("Hello from interval");
    }, 1000);
    return () => {
      clearInterval(id);
      console.log("Cleanup...");
    };
  }, []);

  return <h3>First Component</h3>;
};

export default CleanupFunction;
