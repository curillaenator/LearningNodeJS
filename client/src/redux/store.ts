import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
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

export type TState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;

(window as any).store = store;
