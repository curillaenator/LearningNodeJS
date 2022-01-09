import { MutableRefObject } from "react";
import { TaskType, Project } from "../../common";

export type TaskProps = TaskType;

export interface LayoutProps {
  currentTasks: TaskType[];
}

interface LayoutSizes {
  w: number;
  h: number;
}

export type UseLayout = () => [
  LayoutSizes,
  MutableRefObject<HTMLDivElement | null>
];
