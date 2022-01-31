import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tasksAPI } from "../api";
import { batch } from "react-redux";
import { Thunk, TaskType } from "../common";

interface TasksState {
  error: string;
  loading: boolean;
  currentTasks: TaskType[];
  openedTask: TaskType | null;
}

const initialState: TasksState = {
  error: "",
  loading: false,
  currentTasks: [],
  openedTask: null,
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

    setLoadedTasks: (state, action: PayloadAction<TaskType>) => {
      state.openedTask = action.payload;
    },
  },
});

export const tasks = tasksSlice.reducer;

export const {
  setTasksError,
  setTasksLoading,
  setCurrentTasks,
  setLoadedTasks,
} = tasksSlice.actions;

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
    const question = confirm("Are you sure to delete task?");

    if (!question) return;

    batch(() => {
      dispatch(setTasksLoading(true));
      dispatch(setTasksError(""));
    });

    const token = getState().auth.token;
    const response = await tasksAPI.deleteTask(token, taskId);

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

export const updateLayout = (task: TaskType): Thunk => {
  return async (dispatch, getState) => {
    // console.log(task);

    batch(() => {
      dispatch(setTasksError(""));
    });

    const token = getState().auth.token;

    const response = await tasksAPI.updateLayout(token, task);

    // console.log(response);

    if (typeof response === "string") {
      return batch(() => {
        dispatch(setTasksError(response));
      });
    }

    if (response.status === 201) {
      const tasks = getState().tasks.currentTasks;

      const index = tasks.findIndex((t) => t._id === task._id);
      const tasksUpd = [...tasks];

      tasksUpd.splice(index, 1, task);

      batch(() => {
        dispatch(setCurrentTasks(tasksUpd));
      });
    }
  };
};

export const getOpenedTask = (taskId: string): Thunk => {
  return async (dispatch, getState) => {
    const tasks = getState().tasks.currentTasks;
    const token = getState().auth.token;
    const openedTask = tasks.find((task) => task._id === taskId);

    if (!openedTask) {
      batch(() => {
        dispatch(setTasksLoading(true));
        dispatch(setTasksError(""));
      });

      const response = await tasksAPI.getTask(token, taskId);

      console.log(response);

      if (typeof response === "string") {
        return batch(() => {
          dispatch(setTasksError(response));
          dispatch(setTasksLoading(false));
        });
      }

      batch(() => {
        dispatch(setTasksLoading(true));
        dispatch(setLoadedTasks(response.task));
      });

      return;
    }

    dispatch(setLoadedTasks(openedTask));
  };
};
