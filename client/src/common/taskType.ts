import { Layout } from "react-grid-layout";

export interface TaskType {
  id: string;
  parentProjectId: string;
  taskId: string;
  title: string;
  status?: "open" | "inProgress" | "done";
  created?: string;
  finished?: string;
  executor?: string;
  layout: Layout;
}

export const DefaultTask: TaskType = {
  id: "",
  parentProjectId: "",
  taskId: "",
  title: "",
  status: "open",
  created: "",
  finished: "",
  executor: "",
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
