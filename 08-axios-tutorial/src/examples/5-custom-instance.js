import { useEffect } from "react";
import axios from "axios";
import authFetch from "../axios/custom";

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const response1 = await authFetch("/");
      const response2 = await axios.get(randomUserUrl);
    } catch (error) {
      console.log(error.response1);
      console.log(error.response2);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
