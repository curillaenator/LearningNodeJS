import React, { FC } from "react";
import styled from "styled-components";

import { useAppSelector } from "../../redux";

import { Button } from "../buttons";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.bg.dark};

  /* .search {
    position: relative;
    flex-grow: 0;
    flex-shrink: 0;
    width: 680px;
    height: 45px;

    & > input {
      width: 100%;
      height: 38px;
      margin-top: 5px;
      border: 1px solid $primary;
      border-radius: 19px;
      outline: none;
      padding: 0 36px 0 17px;
    }

    & > img {
      position: absolute;
      bottom: 11px;
      right: 13px;
      width: 19px;
      height: 19px;
      object-fit: cover;
    }
  } */

  .app-title {
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

  @media (min-width: 768px) {
    padding: 0 24px;
  }

  @media (min-width: 1152px) {
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    padding: 0 56px;
  }
`;

export const Header: FC = () => {
  const { userID } = useAppSelector((state) => state.auth);

  return (
    <HeaderStyled>
      {/* <div className="search">
        <input type="text" />
        <img
          src="https://pngfree.io/upload/imgs/homepngwing/free-png-bqllw.png"
          alt="Поиск"
        />
      </div> */}

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

      {!userID && <Button title="Login" icon="login" size="m" />}
    </HeaderStyled>
  );
};
