import React, { FC, useCallback } from "react";
import styled from "styled-components";

import { Button } from "../../../components/buttons";

import { AvailableProject } from "../interfaces";

const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  min-width: 200px;
  padding: 8px;
  background-color: ${({ theme }) => theme.bg.light};
  box-shadow: ${({ theme }) => theme.shadows.base};
  border-radius: 16px;
  overflow: hidden;
`;

interface MenuProps {
  availableProjects: AvailableProject[];
  close: () => void;
}

export const Menu: FC<MenuProps> = (props) => {
  const { availableProjects, close } = props;

  const projectHandler = useCallback(() => {
    close();
  }, []);

  return (
    <MenuStyled>
      {availableProjects.map((project) => (
        <Button
          key={project.id}
          variant="ghost"
          icon="point"
          title={project.name}
          onClick={projectHandler}
        />
      ))}
    </MenuStyled>
  );
};
