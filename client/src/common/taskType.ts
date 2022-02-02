export enum TaskStatuses {
  open = "open",
  inProgress = "inProgress",
  done = "done",
}

export enum TaskPriorities {
  highest = "highest",
  high = "high",
  medium = "medium",
  low = "low",
  lowest = "lowest",
}

export interface TaskType {
  _id: string;
  projectId: string;
  title: string;
  status: TaskStatuses;
  priority: TaskPriorities;
  created: string;
  finished?: string;
  owner: string;
  executor?: string;
  description: string;
  layout: string;
}

export interface GetTasksResponse {
  status: number | string;
  projectTasks: TaskType[];
}
export interface GetTaskResponse {
  status: number | string;
  task: TaskType;
}

export interface CreateTaskResponse {
  status: number | string;
  message: string;
  task: TaskType;
}

export interface DeleteTaskResponse {
  status: number | string;
  message: string;
}

export interface LayoutTaskResponse {
  status: number | string;
  message: string;
}
