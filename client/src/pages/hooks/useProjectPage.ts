import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  useAppDispatch,
  useAppSelector,
  setCreateProjectModalOpen,
  setCreateTaskModalOpen,
  setCurrentProject,
} from "../../redux";

import { UseProjectsPage } from "./interfaces";

export const useProjectsPage: UseProjectsPage = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const dispatch = useAppDispatch();
  const {
    currentProject,
    ownedProjects,
    isCreateProjectModalOpen,
    isCreateTaskModalOpen,
  } = useAppSelector((state) => state.projects);

  useEffect(() => {
    const foundProject = ownedProjects.find(
      (project) => project._id === projectId
    );

    if (projectId && foundProject) {
      dispatch(setCurrentProject(foundProject));
    }
  }, [projectId, ownedProjects, dispatch]);

  const closeCreateProjectModal = useCallback(() => {
    dispatch(setCreateProjectModalOpen(false));
  }, [dispatch]);

  const closeCreateTaskModal = useCallback(() => {
    dispatch(setCreateTaskModalOpen(false));
  }, [dispatch]);

  return [
    currentProject,
    isCreateProjectModalOpen,
    isCreateTaskModalOpen,
    closeCreateProjectModal,
    closeCreateTaskModal,
  ];
};
