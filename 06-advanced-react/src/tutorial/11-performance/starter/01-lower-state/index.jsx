import { useState } from "react";
import { data } from "../../../../data";
import List from "./List";
import Counter from "./Counter";

const LowerState = () => {
  const [people, setPeople] = useState(data);
  // const [count, setCount] = useState(0);

  const clearList = () => {
    setPeople([]);
  };

  return (
    <section>
      <Counter />
      <List people={people} />
      <button
        className="btn"
        onClick={clearList}
        style={{ backgroundColor: "#D21942" }}
      >
        Clear List
      </button>
    </section>
  );
};
export default LowerState;
