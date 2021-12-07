import { MutableRefObject } from "react";
import { Layout } from "react-grid-layout";

export interface TaskProps {
  id: string;
  taskId: string;
  title: string;
  status?: string;
  created?: string;
  finished?: string;
  executor?: string;
  layout: Layout;
}

interface LayoutSizes {
  w: number;
  h: number;
}

export type UseLayout = () => [
  LayoutSizes,
  MutableRefObject<HTMLDivElement | null>
];
