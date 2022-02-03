import { TaskType, TaskStatuses, TaskPriorities } from "@src/common";

export const STATUS_POSITION: Record<TaskStatuses, number> = {
  open: 0,
  inProgress: 1,
  done: 2,
};

export const TASK_CONFIG = {
  x: 0,
  y: 0,
  w: 1,
  h: 1,
  minW: 1,
  maxW: 1,
  minH: 1,
  maxH: 1,
};

export const INITIAL_TASK: Omit<TaskType, "_id" | "created" | "finished"> = {
  projectId: "",
  title: "",
  status: TaskStatuses.open,
  priority: TaskPriorities.lowest,
  owner: "",
  executor: "",
  description: "",
  layout: JSON.stringify(TASK_CONFIG),
};

export const CREATE_TASK_ERROR_MSG = "create form uncomplete";
