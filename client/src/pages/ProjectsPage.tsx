import React, { FC } from "react";
import styled from "styled-components";

import { useProjectsPage } from "./hooks/useProjectPage";

import { Modal } from "../components/modal";
import { CreateProject } from "../moleculas/createProject";
import { Toolbar } from "../moleculas/toolbar";

const ProjectsPageStyled = styled.div`
  padding: 0 16px;
`;

export const ProjectsPage: FC = () => {
  const [currentProject, isCreateProjectModalOpen, closeCreateProjectModal] =
    useProjectsPage();

  return (
    <ProjectsPageStyled>
      <Toolbar />

      <Modal open={isCreateProjectModalOpen} onClose={closeCreateProjectModal}>
        <CreateProject close={closeCreateProjectModal} />
      </Modal>
    </ProjectsPageStyled>
  );
};
