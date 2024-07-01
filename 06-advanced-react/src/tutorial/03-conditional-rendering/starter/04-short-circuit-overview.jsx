import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Peter");

  return (
    <div>
      <h1>Short Circuit Overview</h1>
      <br />
      <h2>|| Operator</h2>
      <h4>Falsy OR: {text || "Render Successful"}</h4>
      <h4>Falsy OR: {name || "Render Successful"}</h4>
      <br />
      <h2>&& Operator</h2>
      <h4>Truthy &&: {text && "Render Successful"}</h4>
      <h4>Truthy &&: {name && "Render Successful"}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
