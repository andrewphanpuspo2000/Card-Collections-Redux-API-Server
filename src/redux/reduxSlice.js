import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const ReduxSlice = createSlice({
  name: "cards-item",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.items = action.payload;
    },
  },
});

const { reducer, actions } = ReduxSlice;

export const { addList } = actions;

export default reducer;
