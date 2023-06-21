import { toast } from "react-toastify";
import { addData, getData, pushComment } from "../helper/axios";
import { addList, addProduct } from "./reduxSlice";

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

export const putComment = (item) => async (dispatch) => {
  try {
    // const result = pushComment(item);
    // toast.promise(result, {
    //   pending: "..pending",
    // });
    const { status, informations } = await pushComment(item);

    if (status === "success") {
      toast[status](informations);
      dispatch(retrieveData());
    }
    return status;
  } catch (error) {
    console.log(error.message);
  }
};

export const addProd = (item) => async (dispatch) => {
  try {
    const result = dispatch(addProduct(item));
  } catch (error) {
    console.log(error.message);
  }
};
