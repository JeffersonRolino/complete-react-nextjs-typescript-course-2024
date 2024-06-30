import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("Peter Parker");
  const [age, setAge] = useState(16);
  const [hobby, setHobby] = useState("Climb buildings");

  const john = {
    name: "John Smith",
    age: 32,
    hobby: "Read books",
  };

  const changePerson = (name, age, hobby) => {
    setName(name);
    setAge(age);
    setHobby(hobby);
  };

  return (
    <div className="people-container">
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>{`Enjoys: ${hobby}`}</h4>
      <button
        className="btn"
        onClick={() => changePerson(john.name, john.age, john.hobby)}
      >
        {`Show ${john.name}`}
      </button>
    </div>
  );
};

export default UseStateObject;
