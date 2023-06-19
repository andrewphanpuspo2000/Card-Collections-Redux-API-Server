import { toast } from "react-toastify";
import { addData, getData } from "../helper/axios";
import { addList } from "./reduxSlice";

export const addCard = (item) => async (dispatch) => {
  try {
    const result = addData(item);
    console.log(result);
    toast.promise(result, {
      pending: "data is transferred...",
    });
    const { status, informations } = await result;
    console.log(status);
    toast[status](informations);

    if (status === "success") {
      dispatch(retrieveData());
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const retrieveData = () => async (dispatch) => {
  try {
    const { status, list } = await getData();
    if (status === "success") {
      dispatch(addList(list));
      console.log(list);
    }
  } catch (error) {
    console.log(error.message);
  }
};
