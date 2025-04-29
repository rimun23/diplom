import { useState, useEffect } from "react";
import axios from "axios";
const useHouses = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get("http://localhost:3000/houses");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  return { data };
};
export default useHouses;
