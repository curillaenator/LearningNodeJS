import React, { FC } from "react";
import styled from "styled-components";

import {
  useAppDispatch,
  userSignOut,
  setProfileModalOpen,
} from "../../../redux";

import { Button } from "../../../components/buttons";

const UserMenyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  padding: 8px;
  background-color: ${({ theme }) => theme.bg.light};
  box-shadow: ${({ theme }) => theme.shadows.base};
  border-radius: 16px;
  overflow: hidden;
`;

interface UserMenuProps {
  close: () => void;
}

export const UserMenu: FC<UserMenuProps> = ({ close }) => {
  const dispatch = useAppDispatch();

  return (
    <UserMenyStyled>
      <Button
        icon="pencil"
        variant="ghost"
        title="Profile"
        size="m"
        onClick={() => {
          dispatch(setProfileModalOpen(true));
          close();
        }}
      />

      <Button
        icon="settings"
        variant="ghost"
        title="Settings"
        size="m"
        onClick={close}
      />

      <Button
        icon="logout"
        variant="ghost"
        title="Log Out"
        size="m"
        onClick={() => {
          dispatch(userSignOut());
          close();
        }}
      />
    </UserMenyStyled>
  );
};
