import axios from "axios";

import { TaskType, GetTasksResponse, CreateTaskResponse } from "../common";

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
}

export const tasksAPI: TasksAPI = {
  getTasks: (token, projectId) => {
    base.defaults.headers.common["Authorization"] = token;

    return base
      .post("/tasks/tasks", { projectId })
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
};
