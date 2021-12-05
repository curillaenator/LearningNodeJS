import { useEffect } from "react";

import {
  useAppDispatch,
  useAppSelector,
  setCreateProjectModalOpen,
  setAvailableProjects,
  setCurrentProject,
  Project,
} from "../../../redux";

const projectsMOCK = [
  { id: "svsfsaas", title: "Project one" },
  { id: "dsgsdg", title: "Project two" },
  { id: "xcbxcb", title: "Project three" },
  { id: "cvncvn", title: "Project four" },
];

interface ProjectWithHandler extends Project {
  onClick: (project: { id: string; title: string }) => void;
}

type UseProjectToolbarMenu = () => [
  Project | null,
  ProjectWithHandler[],
  () => void
];

export const useProjectToolbarMenu: UseProjectToolbarMenu = () => {
  const dispatch = useAppDispatch();

  const { currentProject, availableProjects } = useAppSelector(
    (state) => state.projects
  );

  useEffect(() => {
    dispatch(setAvailableProjects(projectsMOCK));
  }, []);

  const selectableProjects = availableProjects.map((project) => ({
    id: project.id,
    title: project.title,
    onClick: (item: { id: string; title: string }) => {
      dispatch(setCurrentProject(item));
    },
  }));

  const openCreateProjectModal = () => {
    dispatch(setCreateProjectModalOpen(true));
  };

  return [currentProject, selectableProjects, openCreateProjectModal];
};
