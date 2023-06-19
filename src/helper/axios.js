import axios from "axios";

const API = "http://localhost:8000/api/information";
export const addData = async (item) => {
  const result = await axios.post(API, item);
  const { data } = result;
  console.log(result);
  return data;
};
export const getData = async () => {
  const result = await axios.get(API);
  const { data } = result;
  console.log(result);
  return data;
};
