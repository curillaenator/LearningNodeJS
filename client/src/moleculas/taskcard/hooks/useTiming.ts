import { TaskType, TaskStatuses } from "@src/common";

const HOUR = 3600000;
const MIN = 60000;

const getHours = (ms: number) => {
  return Math.floor(ms / HOUR);
};

const getMinutes = (fh: number, ms: number) => {
  return Math.floor((ms - fh * HOUR) / MIN);
};

export const useTiming = (
  params: Pick<TaskType, "status" | "created" | "progressed" | "finished">
) => {
  const { status, created, progressed, finished } = params;

  const times: Record<TaskStatuses, number> = {
    //@ts-ignore
    open: Date.now() - new Date(created),
    //@ts-ignore
    inProgress: Date.now() - new Date(progressed || 0),
    //@ts-ignore
    done: new Date(finished || 0) - new Date(created),
  };

  const hours = getHours(times[status]);
  const minutes = getMinutes(hours, times[status]);

  return `${hours}h ${minutes}m`;
};
