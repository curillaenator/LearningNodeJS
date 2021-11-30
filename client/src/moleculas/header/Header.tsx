import React, { FC } from "react";
import styled from "styled-components";

import { useAppSelector, useAppDispatch, userSignOut } from "../../redux";

import { Button } from "../../components/buttons";
import { HeaderProps } from "./interfaces";

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

  .app-user {
    display: flex;
    align-items: center;
    gap: 16px;

    &-name {
      font-size: 18px;
      font-weight: 500;
      color: ${({ theme }) => theme.text.light};
    }

    &-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

export const Header: FC<HeaderProps> = ({ openLogin }) => {
  const dispatch = useAppDispatch();
  const { userID, name, avatarURL } = useAppSelector((state) => state.auth);

  const handleSignOut = () => dispatch(userSignOut());

  return (
    <HeaderStyled>
      <h1 className="app-title">TaskMan</h1>

      {userID && (
        <div className="app-user" onClick={handleSignOut}>
          <span className="app-user-name">{name || "N/A"}</span>

          <img
            className="app-user-avatar"
            src={avatarURL || "https://my-engine.ru/modules/users/avatar.png"}
            alt="Аватар"
          />
        </div>
      )}

      {!userID && (
        <Button title="Sign in" icon="login" size="m" onClick={openLogin} />
      )}
    </HeaderStyled>
  );
};
