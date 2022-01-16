import { MutableRefObject } from "react";
import { TaskType } from "../../common";
import { Layout } from "react-grid-layout";

export type TaskProps = TaskType;

export interface LayoutProps {
  currentTasks: TaskType[];
}

interface LayoutSizes {
  w: number;
  h: number;
}

export type UseLayout = (
  tasks: TaskType[]
) => [
  LayoutSizes,
  MutableRefObject<HTMLDivElement | null>,
  (layouts: Layout[], oldItem: Layout, newItem: Layout) => void
];
