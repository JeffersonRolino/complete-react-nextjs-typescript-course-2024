import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "John Snow" });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div>
      {/* <h2>{name || "default value"}</h2> */}
      {/* {text && (
        <div>
          <h2>I was rendered...</h2>
          <h2>{text}</h2>
        </div>
      )} */}
      {user && <SomeComponent name={user.name} />}
      <h2 style={{ margin: "2rem 0" }}>Ternary Operator</h2>
      <button className="btn">{isEditing ? "edit" : "add"}</button>
      {user ? <Logged name={user.name} /> : <NotLogged />}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>Hi my name is</h2>
      <h2>{name}</h2>
    </div>
  );
};

const Logged = ({ name }) => {
  return (
    <div>
      <h4 style={{ marginTop: "2rem" }}>Hello {name}</h4>
    </div>
  );
};

const NotLogged = () => {
  return (
    <div>
      <h4 style={{ marginTop: "2rem" }}>You need to login...</h4>
    </div>
  );
};

export default ShortCircuitExamples;
