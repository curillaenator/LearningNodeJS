import { FormEvent } from "react";
import { TaskType, TaskStatuses } from "../../common/taskType";

export interface CreateTaskProps {
  close: () => void;
}

export interface FormHandlers {
  setTitle: (title: string) => void;
  setStatus: (status: TaskStatuses) => void;
  setDescription: (description: string) => void;
  setExecutor: (userId: string) => void;
}

export type UseCreateTaskForm = (close: () => void) => {
  values: Omit<TaskType, "_id" | "created" | "finished">;
  handlers: FormHandlers;
  submit: (e: FormEvent) => void;
};
