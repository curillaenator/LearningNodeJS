import React, { FC } from "react";
import styled from "styled-components";

import { Button } from "../../components/buttons";
import { Dropdown } from "../../components/dropdown";
import { Menu } from "./components/Menu";

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

export const Toolbar: FC<ToolbarProps> = (props) => {
  const { availableProjects = [] } = props;

  return (
    <ToolbarStyled>
      <div className="tb-projects">
        <Button icon="add" title="Create new project" size="l" />

        <span className="tb-projects-or">or</span>

        <Dropdown
          triggerTitle="Chose existing"
          position="bottom left"
          offsetY={12}
        >
          {(close: () => void) => (
            <Menu availableProjects={availableProjects} close={close} />
          )}
        </Dropdown>
      </div>
    </ToolbarStyled>
  );
};
