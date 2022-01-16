import axios from "axios";

import {
  TaskType,
  GetTasksResponse,
  CreateTaskResponse,
  DeleteTaskResponse,
  LayoutTaskResponse,
} from "../common";

const base = axios.create({ baseURL: "http://localhost:3300/api/" });

interface TasksAPI {
  getTasks: (
    token: string,
    projectId: string
  ) => Promise<GetTasksResponse | string>;

  createTask: (
    token: string,
    task: Omit<TaskType, "_id" | "created" | "finished">
  ) => Promise<CreateTaskResponse | string>;

  deleteTask: (
    token: string,
    taskId: string
  ) => Promise<DeleteTaskResponse | string>;

  updateLayout: (
    token: string,
    task: Pick<TaskType, "layout" | "_id">
  ) => Promise<LayoutTaskResponse | string>;
}

export const tasksAPI: TasksAPI = {
  getTasks: (token, projectId) => {
    base.defaults.headers.common["Authorization"] = token;

    return base
      .get(`/tasks/tasks/${projectId}`)
      .then((r) => r.data)
      .catch((err) => err.response.data.message);
  },

  createTask: (token, task) => {
    base.defaults.headers.common["Authorization"] = token;

    return base
      .post("/tasks/create", task)
      .then((r) => r.data)
      .catch((err) => err.response.data.message);
  },

  deleteTask: (token, taskId) => {
    base.defaults.headers.common["Authorization"] = token;

    return base
      .delete(`/tasks/delete/${taskId}`)
      .then((r) => r.data)
      .catch((err) => err.response.data.message);
  },

  updateLayout: (token, task) => {
    base.defaults.headers.common["Authorization"] = token;

    return base
      .put(`/tasks/layout/${task._id}`, { layout: task.layout })
      .then((r) => r.data)
      .catch((err) => err.response.data.message);
  },
};
