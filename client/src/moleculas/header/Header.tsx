import React, { FC } from "react";
import styled from "styled-components";

import { useAppSelector } from "../../redux";

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
    color: ${({ theme }) => theme.text.primary};
  }

  .app-user {
    display: flex;
    align-items: center;
    gap: 32px;

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

export const Header: FC<HeaderProps> = (props) => {
  const { openLogin } = props;

  const { userID } = useAppSelector((state) => state.auth);

  return (
    <HeaderStyled>
      <h1 className="app-title">T-Man</h1>

      {userID && (
        <div className="app-user">
          <span className="app-user-name">Артуров Кирилл</span>

          <img
            className="app-user-avatar"
            src="https://my-engine.ru/modules/users/avatar.png"
            alt="Аватар"
          />
        </div>
      )}

      {!userID && (
        <Button title="Login" icon="login" size="m" onClick={openLogin} />
      )}
    </HeaderStyled>
  );
};
