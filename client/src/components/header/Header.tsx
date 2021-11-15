import React, { FC } from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 65px;
  padding: 0 17px;
  background-color: #333333;

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

  .avatar {
    display: flex;
    align-items: center;

    & > p {
      font-family: "Roboto", sans-serif;
      font-size: 18px;
      font-weight: 500;
      margin-right: 14px;
      letter-spacing: 0.005rem;
      transform: translateY(-2px);
    }

    & > img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

export const Header: FC = () => {
  return (
    <HeaderStyled>
      {/* <div className="search">
        <input type="text" />
        <img
          src="https://pngfree.io/upload/imgs/homepngwing/free-png-bqllw.png"
          alt="Поиск"
        />
      </div> */}

      <div className="avatar">
        <p>Артуров Кирилл</p>
        <img src="https://my-engine.ru/modules/users/avatar.png" alt="Аватар" />
      </div>
    </HeaderStyled>
  );
};
