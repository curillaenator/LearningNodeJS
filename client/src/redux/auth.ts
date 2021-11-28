import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  userID: string;
  name?: string;
  avatarURL?: string;
}

interface AuthState {
  userID: string;
  name: string;
  avatarURL: string;
}

const initialState: AuthState = {
  userID: "",
  name: "",
  avatarURL: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.userID = action.payload.userID;
      if (action.payload.name) state.name = action.payload.name;
      if (action.payload.avatarURL) state.avatarURL = action.payload.avatarURL;
    },
  },
});
export const auth = authSlice.reducer;

const { setUser } = authSlice.actions;
