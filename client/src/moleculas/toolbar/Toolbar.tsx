import React, { FC } from "react";
import styled from "styled-components";

import { useProjectToolbarMenu } from "./hooks/useProjectToolbarMenu";

import { Button } from "../../components/buttons";
import { Loader } from "../../components/loader";
import { Dropdown, Menu } from "../../components/dropdown";

const ToolbarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  .tb-tasks {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .tb-projects {
    display: flex;
    align-items: center;
    gap: 16px;

    &-or {
      color: ${({ theme }) => theme.text.gray};
    }
  }
`;

export const Toolbar: FC = () => {
  const {
    currentProject,
    selectableProjects,
    openCreateProjectModal,
    openCreateTaskModal,
    loading,
  } = useProjectToolbarMenu();

  return (
    <ToolbarStyled>
      <div className="tb-tasks">
        <Button
          icon="pencil"
          title="Create new task"
          size="l"
          onClick={openCreateTaskModal}
          disabled={!currentProject}
        />

        {loading && <Loader size="s" />}
      </div>

      <div className="tb-projects">
        <Dropdown
          triggerTitle={
            currentProject ? currentProject.title : "Chose existing"
          }
          disabled={
            loading || !selectableProjects || !selectableProjects.length
          }
          position="bottom left"
        >
          {(close: () => void) => (
            <Menu items={selectableProjects} close={close} maxHeight="172px" />
          )}
        </Dropdown>

        <span className="tb-projects-or">or</span>

        <Button
          icon="project"
          title="Create new project"
          size="l"
          onClick={openCreateProjectModal}
          disabled={loading}
        />
      </div>
    </ToolbarStyled>
  );
};
