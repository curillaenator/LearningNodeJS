import { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  useAppDispatch,
  useAppSelector,
  setCreateProjectModalOpen,
  setCurrentProject,
} from "../../redux";

import { UseProjectsPage } from "./interfaces";

export const useProjectsPage: UseProjectsPage = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const dispatch = useAppDispatch();
  const { currentProject, availableProjects, isCreateProjectModalOpen } =
    useAppSelector((state) => state.projects);

  useEffect(() => {
    const foundProject = availableProjects.find(
      (project) => project._id === projectId
    );

    if (projectId && foundProject) {
      dispatch(setCurrentProject(foundProject));
    }
  }, [projectId, availableProjects, dispatch]);

  const closeCreateProjectModal = () => {
    dispatch(setCreateProjectModalOpen(false));
  };

  return [currentProject, isCreateProjectModalOpen, closeCreateProjectModal];
};
