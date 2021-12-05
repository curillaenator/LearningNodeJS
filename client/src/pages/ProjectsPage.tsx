import React, { FC } from "react";
import styled from "styled-components";

import {
  useAppDispatch,
  useAppSelector,
  setCreateProjectModalOpen,
} from "../redux";

import { Modal } from "../components/modal";
import { CreateProject } from "../moleculas/createProject";
import { Toolbar } from "../moleculas/toolbar";

const ProjectsPageStyled = styled.div`
  padding: 0 16px;
`;

export const ProjectsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { isCreateProjectModalOpen } = useAppSelector(
    (state) => state.projects
  );

  return (
    <ProjectsPageStyled>
      <Toolbar />

      <Modal
        open={isCreateProjectModalOpen}
        onClose={() => dispatch(setCreateProjectModalOpen(false))}
      >
        <CreateProject
          close={() => dispatch(setCreateProjectModalOpen(false))}
        />
      </Modal>
    </ProjectsPageStyled>
  );
};
