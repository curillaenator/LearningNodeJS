import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
  useAppDispatch,
  useAppSelector,
  setCreateProjectModalOpen,
  setCreateTaskModalOpen,
  getAvailableProjects,
} from "../../../redux";

import { UseProjectToolbarMenu } from "./intergaces";

export const useProjectToolbarMenu: UseProjectToolbarMenu = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { currentProject, ownedProjects, loading } = useAppSelector(
    (state) => state.projects
  );

  const tasksLoading = useAppSelector((state) => state.tasks.loading);

  useEffect(() => {
    dispatch(getAvailableProjects());
  }, [dispatch]);

  const selectableProjects = ownedProjects.map((project) => ({
    id: project._id,
    title: project.title,
    onClick: () => navigate(`/${project._id}`),
  }));

  const openCreateProjectModal = useCallback(() => {
    dispatch(setCreateProjectModalOpen(true));
  }, [dispatch]);

  const openCreateTaskModal = useCallback(() => {
    dispatch(setCreateTaskModalOpen(true));
  }, [dispatch]);

  return {
    currentProject,
    selectableProjects,
    openCreateProjectModal,
    openCreateTaskModal,
    loading: tasksLoading || loading,
  };
};
