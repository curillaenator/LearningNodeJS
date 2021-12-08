import { FormEvent } from "react";
import { TaskType } from "../../common/taskType";

export interface CreateTaskProps {
  close: () => void;
}

export enum Statuses {
  open = "open",
  inProgress = "inProgress",
  done = "done",
}

export interface FormValues extends TaskType {}

export interface FormHandlers {
  // id: string;
  // taskId: string;
  setTitle: (title: string) => void;
  setStatus: (status: TaskType["status"]) => void;
  // created?: string;
  // finished?: string;
  setExecutor: (userId: string) => void;
  // layout: Layout;
}

export type UseCreateTaskForm = () => [
  FormValues,
  FormHandlers,
  (e: FormEvent) => void
];
