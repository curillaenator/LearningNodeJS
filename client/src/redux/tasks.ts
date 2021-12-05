import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { batch } from "react-redux";

export interface Project {
  id: string;
  title: string;
}

interface TasksState {
  currentProject: Project | null;
  availableProjects: Project[];
}

const initialState: TasksState = {
  currentProject: null,
  availableProjects: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setCurrentProject: (state, action: PayloadAction<Project>) => {
      state.currentProject = action.payload;
    },

    setAvailableProjects: (state, action: PayloadAction<Project[]>) => {
      state.availableProjects = action.payload;
    },
  },
});

export const tasks = tasksSlice.reducer;

export const { setCurrentProject, setAvailableProjects } = tasksSlice.actions;
