import { FormEvent } from "react";

export interface CreateTaskProps {
  close: () => void;
}

export type UseCreateTaskForm = () => [(e: FormEvent) => void];
