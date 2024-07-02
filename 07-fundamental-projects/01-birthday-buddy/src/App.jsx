import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);
  return <h2>Birthday Reminder</h2>;
};
export default App;
