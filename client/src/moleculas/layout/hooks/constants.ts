import { TaskStatuses } from "@src/common";

export const STATUSES_ASSOC: Record<number, TaskStatuses> = {
  0: TaskStatuses.open,
  1: TaskStatuses.inProgress,
  2: TaskStatuses.done,
};
