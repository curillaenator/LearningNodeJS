import { MutableRefObject } from "react";
import { TaskType } from "../../common/taskType";

export interface TaskProps extends TaskType {}

interface LayoutSizes {
  w: number;
  h: number;
}

export type UseLayout = () => [
  LayoutSizes,
  MutableRefObject<HTMLDivElement | null>
];
