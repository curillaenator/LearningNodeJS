import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  useAppDispatch,
  useAppSelector,
  setCreateProjectModalOpen,
  setCreateTaskModalOpen,
  setCurrentProject,
  getTasks,
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

  const { currentTasks, loading, error } = useAppSelector(
    (state) => state.tasks
  );

  useEffect(() => {
    const foundProject = ownedProjects.find(
      (project) => project._id === projectId
    );

    if (projectId && foundProject) {
      dispatch(setCurrentProject(foundProject));
      dispatch(getTasks(projectId));
    }
  }, [projectId, ownedProjects, dispatch]);

  const closeCreateProjectModal = useCallback(() => {
    dispatch(setCreateProjectModalOpen(false));
  }, [dispatch]);

  const closeCreateTaskModal = useCallback(() => {
    dispatch(setCreateTaskModalOpen(false));
  }, [dispatch]);

  return {
    tasksError: error,
    tasksLoading: loading,
    currentProject,
    currentTasks,
    isCreateProjectModalOpen,
    isCreateTaskModalOpen,
    closeCreateProjectModal,
    closeCreateTaskModal,
  };
};
