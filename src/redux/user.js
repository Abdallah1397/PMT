import { createSlice } from "@reduxjs/toolkit";

// By redux toolkit we will define the reducers and actions in a structured way.
export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    username: null,
  },
  reducers: {
    setUserStatus: (state, action) => {
      state.isAuth = true;
      state.username = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.username = null;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setUserStatus, logout } = userSlice.actions;

export default userSlice.reducer;
