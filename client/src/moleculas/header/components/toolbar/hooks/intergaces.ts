import { Project } from "@src/common";

interface ProjectWithHandler {
  id: string;
  title: string;
  onClick: () => void;
}

export type UseProjectToolbarMenu = () => {
  currentProject: Project | null;
  selectableProjects: ProjectWithHandler[];
  openCreateProjectModal: () => void;
  openCreateTaskModal: () => void;
  loading: boolean;
};
