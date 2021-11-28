import React, { FC, useState } from "react";
import styled from "styled-components";

import { useAppSelector } from "../redux";
import { useRoutes } from "./hooks/useRoutes";

import { Header } from "../moleculas/header";
import { Login } from "../moleculas/login";
import { Modal } from "../components/modal";

const MainStyled = styled.div`
  min-width: 320px;
  color: ${({ theme }) => theme.text.dark};
`;

export const MainPage: FC = () => {
  const { userID } = useAppSelector((state) => state.auth);
  const routes = useRoutes(!!userID);

  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <MainStyled>
      <Header openLogin={() => setLoginOpen(true)} />

      {routes}

      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <Login close={() => setLoginOpen(false)} />
      </Modal>
    </MainStyled>
  );
};
