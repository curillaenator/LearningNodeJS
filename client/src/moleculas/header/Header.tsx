import React, { FC } from "react";
import styled from "styled-components";

import { useAppSelector, useAppDispatch, setAuthModalOpen } from "../../redux";

import { User, UserMenu } from "./components";
import { Button } from "../../components/buttons";
import { Dropdown } from "../../components/dropdown";

// import { HeaderProps } from "./interfaces";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.bg.dark};

  .app-title {
    font-family: "Roboto Condensed", sans-serif;
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const Header: FC = () => {
  const { userID, userName, avatarURL } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  return (
    <HeaderStyled>
      <h1 className="app-title">TaskMan</h1>

      {userID && (
        <Dropdown
          offsetY={12}
          trigger={(open) => (
            <div>
              <User open={open} name={userName} avatarURL={avatarURL} />
            </div>
          )}
        >
          {(close: () => void) => <UserMenu close={close} />}
        </Dropdown>
      )}

      {!userID && (
        <Button
          title="Sign in"
          icon="login"
          size="m"
          onClick={() => dispatch(setAuthModalOpen(true))}
        />
      )}
    </HeaderStyled>
  );
};
