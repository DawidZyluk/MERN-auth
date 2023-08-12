import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : JSON.parse(sessionStorage.getItem("userInfo")),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.userInfo = action.payload;
      if(action.payload.rememberMe) localStorage.setItem("userInfo", JSON.stringify(action.payload));
      else sessionStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    setLogout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
