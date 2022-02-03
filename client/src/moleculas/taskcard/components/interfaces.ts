import { TaskPriorities, TaskType } from "@src/common";

export interface PriorityStyledProps {
  priority: TaskPriorities;
}

export interface PriorityProps {
  priority: TaskPriorities;
}

export interface ExecutorProps {
  executor?: string;
}

export type TimingProps = Pick<
  TaskType,
  "status" | "created" | "progressed" | "finished"
>;
