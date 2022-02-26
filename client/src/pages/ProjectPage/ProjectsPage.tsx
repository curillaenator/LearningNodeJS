import React, { FC } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { useProjectsPage } from "./hooks/useProjectPage";

import { Modal } from "@src/components/modal";
import { CreateProject } from "@src/moleculas/createProject";
import { CreateTask } from "@src/moleculas/createTask";

import { Layout } from "@src/moleculas/layout";

const ProjectsPageStyled = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  padding: 16px;

  .framework {
    width: 100%;
    height: 100%;
    padding: 8px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.bg.gray};

    &-message {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }
`;

export const ProjectsPage: FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const {
    tasksError,
    currentProject,
    currentTasks,
    isCreateProjectModalOpen,
    isCreateTaskModalOpen,
    closeCreateProjectModal,
    closeCreateTaskModal,
  } = useProjectsPage(projectId || null);

  return (
    <ProjectsPageStyled>
      {/* <Toolbar /> */}

      <div className="framework">
        {!currentProject && (
          <div className="framework-message">Chose project</div>
        )}

        {currentProject && tasksError && (
          <div className="framework-message">{tasksError}</div>
        )}

        {currentProject && !currentTasks.length && (
          <div className="framework-message">No data</div>
        )}

        {currentProject && !tasksError && !!currentTasks.length && (
          <Layout currentTasks={currentTasks} />
        )}
      </div>

      <Modal open={isCreateProjectModalOpen} onClose={closeCreateProjectModal}>
        <CreateProject close={closeCreateProjectModal} />
      </Modal>

      <Modal open={isCreateTaskModalOpen} onClose={closeCreateTaskModal}>
        <CreateTask close={closeCreateTaskModal} />
      </Modal>
    </ProjectsPageStyled>
  );
};
