import { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  const { currentProject, ownedProjects, loading } = useAppSelector(
    (state) => state.projects
  );

  useEffect(() => {
    dispatch(getAvailableProjects());
  }, []);

  const selectableProjects = ownedProjects.map((project) => ({
    id: project._id,
    title: project.title,
    onClick: () => history.push(`/projects/${project._id}`),
  }));

  const openCreateProjectModal = useCallback(() => {
    dispatch(setCreateProjectModalOpen(true));
  }, [dispatch]);

  const openCreateTaskModal = useCallback(() => {
    dispatch(setCreateTaskModalOpen(true));
  }, [dispatch]);

  return [
    currentProject,
    selectableProjects,
    openCreateProjectModal,
    openCreateTaskModal,
    loading,
  ];
};
