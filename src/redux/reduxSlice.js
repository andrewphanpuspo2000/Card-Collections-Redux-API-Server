import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  product: {},
};
const ReduxSlice = createSlice({
  name: "cards-item",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.items = action.payload;
    },
    addProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

const { reducer, actions } = ReduxSlice;

export const { addList } = actions;
export const { addProduct } = actions;

export default reducer;
