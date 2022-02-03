import { TaskPriorities } from "@src/common";

import { icons } from "../assets/icons";

export const PRIORITY_ASSOC: Record<TaskPriorities, JSX.Element> = {
  highest: icons.double,
  high: icons.single,
  medium: icons.circle,
  low: icons.single,
  lowest: icons.double,
};

export const EXECUTOR_UNDEFINED = "Not defined";
