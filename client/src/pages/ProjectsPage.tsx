import React, { FC } from "react";
import styled from "styled-components";

import { useProjectsPage } from "./hooks/useProjectPage";

import { Modal } from "../components/modal";
import { CreateProject } from "../moleculas/createProject";
import { Toolbar } from "../moleculas/toolbar";

const ProjectsPageStyled = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  padding: 16px;

  .framework {
    width: 100%;
    height: calc(100% - 56px);
    border-radius: 16px;
    background-color: ${({ theme }) => theme.bg.light};
  }
`;

export const ProjectsPage: FC = () => {
  const [currentProject, isCreateProjectModalOpen, closeCreateProjectModal] =
    useProjectsPage();

  return (
    <ProjectsPageStyled>
      <Toolbar />

      <div className="framework"></div>

      <Modal open={isCreateProjectModalOpen} onClose={closeCreateProjectModal}>
        <CreateProject close={closeCreateProjectModal} />
      </Modal>
    </ProjectsPageStyled>
  );
};
