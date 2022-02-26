import { Project, TaskType } from "@src/common";

export type UseProjectsPage = (projectId: string | null) => {
  tasksLoading: boolean;
  tasksError: string;
  currentProject: Project | null;
  currentTasks: TaskType[];
  isCreateProjectModalOpen: boolean;
  isCreateTaskModalOpen: boolean;
  closeCreateProjectModal: () => void;
  closeCreateTaskModal: () => void;
};
