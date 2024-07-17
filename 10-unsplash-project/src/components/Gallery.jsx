import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const KEY = import.meta.env.VITE_API_KEY;
const url = `${API_URL}?client_id=${KEY}&query=cat`;

function Gallery() {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);

      return result.data;
    },
  });

  console.log(response);

  return (
    <div>
      <h2>Gallery</h2>
    </div>
  );
}

export default Gallery;
