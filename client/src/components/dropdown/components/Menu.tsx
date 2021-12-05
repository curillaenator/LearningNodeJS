import React, { FC, useCallback } from "react";
import styled from "styled-components";

import { Button } from "../../../components/buttons";
import { Scrollbar } from "../../../components/scrollbar";

import { MenuProps } from "./interfaces";

const MenuStyled = styled.div`
  min-width: 200px;
  padding: 8px 12px 8px 8px;
  background-color: ${({ theme }) => theme.bg.light};
  box-shadow: ${({ theme }) => theme.shadows.base};
  border-radius: 16px;
  overflow: hidden;

  .menu-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

export const Menu: FC<MenuProps> = (props) => {
  const { maxHeight, items, close } = props;

  return (
    <MenuStyled>
      <Scrollbar maxHeight={maxHeight}>
        <div className="menu-list">
          {items.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              icon="point"
              title={item.title}
              onClick={() => {
                item.onClick({ id: item.id, title: item.title });
                close();
              }}
            />
          ))}
        </div>
      </Scrollbar>
    </MenuStyled>
  );
};
