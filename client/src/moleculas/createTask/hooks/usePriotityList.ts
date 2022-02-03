import { TaskPriorities } from "@src/common";
import { RadioProps } from "@src/components/inputs";

export const usePriorityList = (
  currentPriority: TaskPriorities,
  onChange: (priority: TaskPriorities) => void
): RadioProps[] => {
  const priorityMap: TaskPriorities[] = [
    TaskPriorities.highest,
    TaskPriorities.high,
    TaskPriorities.medium,
    TaskPriorities.low,
    TaskPriorities.lowest,
  ];

  return priorityMap.map((priority) => ({
    title: priority,
    size: "m",
    id: priority,
    checked: currentPriority === priority,
    onChange: () => onChange(priority),
  }));
};
