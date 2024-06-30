import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople(
      people.filter((person) => {
        return person.id !== id;
      })
    );
  };

  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div className="people-container">
      <h1>Heroes</h1>
      {people.map((person) => {
        return (
          <div key={person.id} className="person-container">
            <h4>{person.name}</h4>
            <button className="btn" onClick={() => removeItem(person.id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button className="clear-btn" onClick={clearAllItems}>
        Clear List
      </button>
    </div>
  );
};

export default UseStateArray;
