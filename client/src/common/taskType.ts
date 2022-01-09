export enum TaskStatuses {
  open = "open",
  inProgress = "inProgress",
  done = "done",
}

export interface TaskType {
  _id: string;
  projectId: string;
  title: string;
  status: TaskStatuses;
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
