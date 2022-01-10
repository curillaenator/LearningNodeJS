export enum TaskStatuses {
  open = "open",
  inProgress = "inProgress",
  done = "done",
}

export enum TaskPriorities {
  high = "high",
  medium = "medium",
  low = "low",
}

export interface TaskType {
  _id: string;
  projectId: string;
  title: string;
  status: TaskStatuses;
  priority?: TaskPriorities;
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

export interface CreateTaskResponse {
  status: number | string;
  message: string;
  task: TaskType;
}

export interface DeleteTaskResponse {
  status: number | string;
  message: string;
}

export interface NewPositionTaskResponse {
  status: number | string;
  message: string;
}
