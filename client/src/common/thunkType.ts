import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { AppStateType } from "@src/redux";

export type Thunk = ThunkAction<void, AppStateType, unknown, AnyAction>;
