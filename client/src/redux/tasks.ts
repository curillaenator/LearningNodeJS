import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tasksAPI } from "../api";
import { batch } from "react-redux";
import { Thunk, TaskType } from "../common";

interface TasksState {
  error: string;
  loading: boolean;
  currentTasks: TaskType[];
}

const initialState: TasksState = {
  error: "",
  loading: false,
  currentTasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasksError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },

    setTasksLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setCurrentTasks: (state, action: PayloadAction<TaskType[]>) => {
      state.currentTasks = action.payload;
    },
  },
});

export const tasks = tasksSlice.reducer;

export const { setTasksError, setTasksLoading, setCurrentTasks } =
  tasksSlice.actions;

// THUNKS

export const getTasks = (projectId: string): Thunk => {
  return async (dispatch, getState) => {
    batch(() => {
      dispatch(setTasksLoading(true));
      dispatch(setTasksError(""));
    });

    const token = getState().auth.token;
    const response = await tasksAPI.getTasks(token, projectId);

    // console.log(response);

    if (typeof response === "string") {
      return batch(() => {
        dispatch(setTasksError(response));
        dispatch(setTasksLoading(false));
      });
    }

    if (response.status === 201) {
      dispatch(setCurrentTasks(response.projectTasks));
      dispatch(setTasksLoading(false));
    }
  };
};

export const createTask = (
  task: Omit<TaskType, "_id" | "created" | "finished">
): Thunk => {
  return async (dispatch, getState) => {
    batch(() => {
      dispatch(setTasksLoading(true));
      dispatch(setTasksError(""));
    });

    const token = getState().auth.token;
    const response = await tasksAPI.createTask(token, task);

    if (typeof response === "string") {
      return batch(() => {
        dispatch(setTasksError(response));
        dispatch(setTasksLoading(false));
      });
    }

    if (response.status === 201) {
      const tasks = getState().tasks.currentTasks;

      batch(() => {
        dispatch(setCurrentTasks([...tasks, response.task]));
        dispatch(setTasksLoading(false));
      });
    }
  };
};

export const deleteTask = (taskId: string): Thunk => {
  return async (dispatch, getState) => {
    batch(() => {
      dispatch(setTasksLoading(true));
      dispatch(setTasksError(""));
    });

    const token = getState().auth.token;
    const response = await tasksAPI.deleteTask(token, taskId);

    console.log(response);

    if (typeof response === "string") {
      return batch(() => {
        dispatch(setTasksError(response));
        dispatch(setTasksLoading(false));
      });
    }

    if (response.status === 201) {
      const tasks = getState().tasks.currentTasks;

      const index = tasks.findIndex((task) => task._id === taskId);
      const taskUpd = [...tasks];

      taskUpd.splice(index, 1);

      batch(() => {
        dispatch(setCurrentTasks(taskUpd));
        dispatch(setTasksLoading(false));
      });
    }
  };
};
