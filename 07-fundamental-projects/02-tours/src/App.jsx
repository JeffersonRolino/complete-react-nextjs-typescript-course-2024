import { useEffect } from "react";
import { useState } from "react";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      console.log(data);
    } catch (error) {
      throw error(`Error: ${error.message()}`);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div>
      <h2>Tours</h2>
    </div>
  );
};
export default App;
