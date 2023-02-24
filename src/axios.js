import axios from "axios";


const data = axios.create({
  baseURL: "https://dummyjson.com",
});
export default data;
