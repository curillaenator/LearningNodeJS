import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { batch } from "react-redux";

interface TasksState {}

const initialState: TasksState = {};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export const tasks = tasksSlice.reducer;

export const {} = tasksSlice.actions;
