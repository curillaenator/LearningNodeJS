import { Project, TaskType } from "../../common";

export type UseMainPage = () => [boolean, boolean, () => void, () => void];

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
