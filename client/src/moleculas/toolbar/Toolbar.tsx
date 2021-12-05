import React, { FC, useEffect } from "react";
import styled from "styled-components";

import {
  useAppDispatch,
  useAppSelector,
  setAvailableProjects,
  setCurrentProject,
} from "../../redux";

import { useProjectSelector } from "./hooks/useProjectSelector";

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
  const [currentProject, selectableProjects] = useProjectSelector();

  return (
    <ToolbarStyled>
      <div className="tb-projects">
        <Button icon="add" title="Create new project" size="l" />

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
