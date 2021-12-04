import React, { FC } from "react";
import styled from "styled-components";

import { Button } from "../../components/buttons";
import { Dropdown, Trigger } from "../../components/dropdown";
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
  }
`;

export const Toolbar: FC<ToolbarProps> = (props) => {
  const { availableProjects = [] } = props;

  return (
    <ToolbarStyled>
      <div className="tb-projects">
        <Button icon="folder" title="Create new project" size="l" />

        <span>or</span>

        <Dropdown
          position="bottom left"
          offsetY={12}
          trigger={(open) => (
            <div>
              <Trigger active={open} title="Chose existing" size="l" />
            </div>
          )}
        >
          {(close: () => void) => (
            <Menu availableProjects={availableProjects} close={close} />
          )}
        </Dropdown>
      </div>
    </ToolbarStyled>
  );
};
