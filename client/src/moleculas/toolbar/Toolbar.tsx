import React, { FC } from "react";
import styled from "styled-components";

import { useProjectToolbarMenu } from "./hooks/useProjectToolbarMenu";

import { Button } from "../../components/buttons";
import { Dropdown, Menu } from "../../components/dropdown";

import { ToolbarProps } from "./interfaces";

const ToolbarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;

  .tb-projects {
    display: flex;
    align-items: center;
    gap: 16px;

    &-or {
      color: ${({ theme }) => theme.text.gray};
    }
  }
`;

export const Toolbar: FC<ToolbarProps> = () => {
  const [currentProject, selectableProjects, openCreateProjectModal] =
    useProjectToolbarMenu();

  return (
    <ToolbarStyled>
      <div className="tb-projects">
        <Button
          icon="add"
          title="Create new project"
          size="l"
          onClick={openCreateProjectModal}
        />

        <span className="tb-projects-or">or</span>

        <Dropdown
          triggerTitle={
            currentProject ? currentProject.title : "Chose existing"
          }
          position="bottom left"
        >
          {(close: () => void) => (
            <Menu items={selectableProjects} close={close} maxHeight="128px" />
          )}
        </Dropdown>
      </div>
    </ToolbarStyled>
  );
};
