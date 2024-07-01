import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

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
    console.log("hmm, this is interesting...");
  }, []);

  return <h3>First Component</h3>;
};

export default CleanupFunction;
