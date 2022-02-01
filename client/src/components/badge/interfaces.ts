import { ReactText } from "react";
import { TaskStatuses } from "@src/common";

export type BadgeSizes = "s" | "m" | "l" | "xl";

export interface BadgeParams {
  h: string;
  padding: string;
  fontsize: string;
  radius: string;
  gap: string;
}

export interface BadgeStyledProps {
  params: BadgeParams;
  status?: TaskStatuses;
}

export interface BadgeProps {
  title: ReactText;
  size?: BadgeSizes;
  status?: TaskStatuses;
}
