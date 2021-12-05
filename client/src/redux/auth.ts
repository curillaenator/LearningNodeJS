import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { batch } from "react-redux";
import { authAPI } from "../api";

import { Thunk, User, UserCreds, NullUser } from "../common";

const USER_DATA = "userData";

interface AuthState {
  isModalOpen: boolean;
  isRegister: boolean;
  loading: boolean;
  error: string;
  userID: string;
  token: string;
  name: string;
  avatarURL: string;
}

const initialState: AuthState = {
  isModalOpen: false,
  isRegister: false,
  loading: false,
  error: "",
  userID: "",
  token: "",
  name: "",
  avatarURL: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },

    setIsRegister: (state, action: PayloadAction<boolean>) => {
      state.isRegister = action.payload;
    },

    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },

    setUser: (state, action: PayloadAction<User>) => {
      state.userID = action.payload.userID;
      state.token = action.payload.token;
      if (action.payload.name) state.name = action.payload.name;
      if (action.payload.avatarURL) state.avatarURL = action.payload.avatarURL;
    },
  },
});
export const auth = authSlice.reducer;

export const {
  setIsModalOpen,
  setIsRegister,
  setAuthLoading,
  setError,
  setUser,
} = authSlice.actions;

// THUNKS

export const initialize = (): Thunk => {
  return async (dispatch) => {
    // dispatch(setAuthLoading(true));

    const user = localStorage.getItem(USER_DATA);

    if (user) {
      batch(() => {
        dispatch(setUser(JSON.parse(user)));
        // dispatch(setAuthLoading(false));
      });
    }
  };
};

export const userSignUp = (creds: UserCreds): Thunk => {
  return async (dispatch) => {
    dispatch(setAuthLoading(true));

    const response = await authAPI.signUp(creds);

    // console.log(response);

    if (typeof response === "string") {
      return batch(() => {
        dispatch(setError(response));
        dispatch(setAuthLoading(false));
      });
    }

    if (response.status === 201) {
      alert(response.message);

      batch(() => {
        dispatch(setIsRegister(false));
        dispatch(setAuthLoading(false));
      });
    }
  };
};

export const userSignIn = (creds: UserCreds): Thunk => {
  return async (dispatch) => {
    dispatch(setAuthLoading(true));

    const response = await authAPI.signIn(creds);

    console.log(response);

    if (typeof response === "string") {
      return batch(() => {
        dispatch(setError(response));
        dispatch(setAuthLoading(false));
      });
    }

    localStorage.setItem(USER_DATA, JSON.stringify(response));

    batch(() => {
      dispatch(setUser(response));
      dispatch(setAuthLoading(false));
      dispatch(setIsModalOpen(false));
    });
  };
};

export const userSignOut = (): Thunk => {
  return (dispatch) => {
    localStorage.removeItem(USER_DATA);
    dispatch(setUser(NullUser));
  };
};
