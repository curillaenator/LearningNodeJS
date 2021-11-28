import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { auth } from "./auth";

export const store = configureStore({
  reducer: { auth },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        // ignoredActions: ["auth/setUser"],
        // Ignore these field paths in all actions
        // ignoredActionPaths: ["payload.user"],
        // Ignore these paths in the state
        // ignoredPaths: ["auth.user"],
      },
    }),
});

type AppStateType = ReturnType<typeof store.getState>;
type AppDispatchType = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

(window as any).store = store;
