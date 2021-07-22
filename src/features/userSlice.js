import { createSlice } from "@reduxjs/toolkit";
//here is where user slice is created for readux is being implemented and we an access to this layer from everywhere.
const initialState = {
  user: null
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return (state.user = action.payload);
    case "logout":
      return (state.user = {});
    default:
      return state;
  }
};

export const selectUser = (state) => state.user.user;

export default userReducer;
