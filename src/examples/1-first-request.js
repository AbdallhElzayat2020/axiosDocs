import axios from "axios";
import { useEffect } from "react";
// limit, if 429 wait for 15 min and try again
const url = "https://course-api.com/react-store-products";
const FirstRequest = () => {
  const FetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);

  return <h2 className="text-center">first request</h2>;
};
export default FirstRequest;
