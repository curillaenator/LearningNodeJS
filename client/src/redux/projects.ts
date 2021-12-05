import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { projectsAPI } from "../api";
import { batch } from "react-redux";
import { Thunk, Project } from "../common";

interface ProjectState {
  loading: boolean;
  error: string;
  isCreateProjectModalOpen: boolean;
  currentProject: Project | null;
  availableProjects: Project[];
}

const initialState: ProjectState = {
  loading: false,
  error: "",
  isCreateProjectModalOpen: false,
  currentProject: null,
  availableProjects: [],
};

const projectsSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setProjectsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setProjectsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },

    setCreateProjectModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isCreateProjectModalOpen = action.payload;
    },

    setCurrentProject: (state, action: PayloadAction<Project>) => {
      state.currentProject = action.payload;
    },

    setAvailableProjects: (state, action: PayloadAction<Project[]>) => {
      state.availableProjects = action.payload;
    },
  },
});

export const projects = projectsSlice.reducer;

export const {
  setProjectsLoading,
  setProjectsError,
  setCurrentProject,
  setAvailableProjects,
  setCreateProjectModalOpen,
} = projectsSlice.actions;

// THINKS

export const createNewProject = (project: Project): Thunk => {
  return async (dispatch, getState) => {
    dispatch(setProjectsLoading(true));

    const token = getState().auth.token;
    const response = await projectsAPI.createProject(project, token);

    if (typeof response === "string") {
      return batch(() => {
        dispatch(setProjectsError(response));
        dispatch(setProjectsLoading(false));
      });
    }

    if (response.status === 201) {
      batch(() => {
        dispatch(setCreateProjectModalOpen(false));
        dispatch(setProjectsLoading(false));
        dispatch(getAvailableProjects());
        dispatch(setCurrentProject(response.project));
      });

      alert(response.message);
    }
  };
};

export const getAvailableProjects = (): Thunk => {
  return async (dispatch, getState) => {
    dispatch(setProjectsLoading(true));

    const token = getState().auth.token;
    const response = await projectsAPI.getAvailableProjects(token);

    if (typeof response === "string") {
      return batch(() => {
        dispatch(setProjectsError(response));
        dispatch(setProjectsLoading(false));
      });
    }

    if (response.status === 201) {
      // console.log(response);

      batch(() => {
        dispatch(setAvailableProjects(response.availableProjects));
        dispatch(setProjectsLoading(false));
      });
    }
  };
};
