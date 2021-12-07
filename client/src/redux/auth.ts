import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { batch } from "react-redux";
import { authAPI } from "../api";

import { Thunk, User, UserCreds, UpdateData, NullUser } from "../common";

const USER_DATA = "userData";

interface AuthState {
  isProfileModalOpen: boolean;
  isAuthModalOpen: boolean;
  isRegister: boolean;
  loading: boolean;
  error: string;
  userID: string;
  token: string;
  userName: string;
  avatarURL: string;
  created: string;
}

const initialState: AuthState = {
  isProfileModalOpen: false,
  isAuthModalOpen: false,
  isRegister: false,
  loading: false,
  error: "",
  userID: "",
  token: "",
  userName: "",
  avatarURL: "",
  created: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setProfileModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isProfileModalOpen = action.payload;
    },

    setAuthModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isAuthModalOpen = action.payload;
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
      state.userName = action.payload.userName;
      state.avatarURL = action.payload.avatarURL;
      state.created = action.payload.created;
    },
  },
});
export const auth = authSlice.reducer;

export const {
  setProfileModalOpen,
  setAuthModalOpen,
  setIsRegister,
  setAuthLoading,
  setError,
  setUser,
} = authSlice.actions;

// THUNKS

export const initialize = (): Thunk => {
  return async (dispatch) => {
    const user = localStorage.getItem(USER_DATA);

    if (user) {
      const parcedUser = JSON.parse(user);

      batch(() => {
        dispatch(setUser(parcedUser));
      });
    }
  };
};

export const userSignUp = (creds: UserCreds): Thunk => {
  return async (dispatch) => {
    batch(() => {
      dispatch(setAuthLoading(true));
      dispatch(setUser(NullUser));
    });

    const response = await authAPI.signUp(creds);

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
        dispatch(setError(""));
      });
    }
  };
};

export const userSignIn = (creds: UserCreds): Thunk => {
  return async (dispatch) => {
    batch(() => {
      dispatch(setAuthLoading(true));
      dispatch(setUser(NullUser));
    });

    const response = await authAPI.signIn(creds);

    console.log(response);

    if (typeof response === "string") {
      return batch(() => {
        dispatch(setError(response));
        dispatch(setAuthLoading(false));
      });
    }

    if (response.status === 201) {
      localStorage.setItem(USER_DATA, JSON.stringify(response.user));

      batch(() => {
        dispatch(setError(""));
        dispatch(setUser(response.user));
        dispatch(setAuthLoading(false));
        dispatch(setAuthModalOpen(false));
      });
    }
  };
};

export const userSignOut = (): Thunk => {
  return (dispatch) => {
    localStorage.removeItem(USER_DATA);
    dispatch(setUser(NullUser));
  };
};

export const userUpdate = (data: UpdateData): Thunk => {
  return async (dispatch, getState) => {
    dispatch(setAuthLoading(false));

    const { token } = getState().auth;
    const response = await authAPI.update(data, token);

    if (typeof response === "string") {
      return batch(() => {
        dispatch(setError(response));
        dispatch(setAuthLoading(false));
      });
    }

    localStorage.setItem(USER_DATA, JSON.stringify(response.user));

    batch(() => {
      dispatch(setUser(response.user));
      dispatch(setAuthLoading(false));
      dispatch(setProfileModalOpen(false));
    });

    alert(response.message);
  };
};
