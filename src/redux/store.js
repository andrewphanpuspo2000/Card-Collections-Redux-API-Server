import { configureStore } from "@reduxjs/toolkit";
import List from "./reduxSlice";
const Store = configureStore({
  reducer: {
    itemArr: List,
  },
});

export default Store;
