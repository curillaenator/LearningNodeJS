import { Project, TaskType } from "../../common";

export type UseRoutesHook = (isUserAuthed: boolean) => JSX.Element;

export type UseMainPage = () => [
  JSX.Element,
  boolean,
  boolean,
  () => void,
  () => void
];

export type UseProjectsPage = () => {
  tasksLoading: boolean;
  tasksError: string;
  currentProject: Project | null;
  currentTasks: TaskType[];
  isCreateProjectModalOpen: boolean;
  isCreateTaskModalOpen: boolean;
  closeCreateProjectModal: () => void;
  closeCreateTaskModal: () => void;
};
