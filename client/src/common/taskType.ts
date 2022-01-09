import { Layout } from "react-grid-layout";

export interface TaskType {
  _id: string;
  projectId: string;
  title: string;
  status?: "open" | "inProgress" | "done";
  created?: string;
  finished?: string;
  owner: string;
  executor?: string;
  description?: string;
  layout: Layout;
}

export interface GetTasksResponse {
  status: number | string;
  projectTasks: TaskType[];
}

export const DefaultTask: TaskType = {
  _id: "",
  projectId: "",
  title: "",
  status: "open",
  created: "",
  finished: "",
  owner: "",
  executor: "",
  description: "",
  layout: {
    i: "defaultTaskId",
    x: 0,
    y: 9999,
    w: 1,
    h: 1,
    minW: 1,
    maxW: 1,
    minH: 1,
    maxH: 1,
  },
};
