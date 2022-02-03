import { TaskStatuses } from "@src/common";
import { RadioProps } from "@src/components/inputs";

export const useStatusList = (
  currentStatus: TaskStatuses,
  onChange: (status: TaskStatuses) => void
): RadioProps[] => {
  const radioMap = [
    TaskStatuses.open,
    TaskStatuses.inProgress,
    TaskStatuses.done,
  ];

  return radioMap.map((status) => ({
    title: status,
    size: "m",
    id: status,
    checked: currentStatus === status,
    onChange: () => onChange(status),
  }));
};
