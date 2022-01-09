import axios from "axios";

import { TaskType, GetTasksResponse } from "../common";

const base = axios.create({ baseURL: "http://localhost:3300/api/" });

interface TasksAPI {
  getTasks: (
    token: string,
    projectId: string
  ) => Promise<GetTasksResponse | string>;
}

export const tasksAPI: TasksAPI = {
  getTasks: (token, projectId) => {
    base.defaults.headers.common["Authorization"] = token;

    return base
      .post("/tasks/tasks", { projectId })
      .then((r) => r.data)
      .catch((err) => err.response.data.message);
  },
};
