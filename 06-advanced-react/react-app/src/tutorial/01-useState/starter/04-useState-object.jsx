import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter Parker",
    age: 18,
    hobby: "Climbing building and jump around",
  });

  const displayPerson = () => {
    // setPerson({ name: "Tony Stark", age: 47, hobby: "Building robots" });

    //Changing only one value
    setPerson({ ...person, name: "Mary Jane" });
  };

  return (
    <div className="people-container">
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h4>{`Enjoys: ${person.hobby}`}</h4>
      <button className="btn" onClick={displayPerson}>
        Change Person
      </button>
    </div>
  );
};

export default UseStateObject;
