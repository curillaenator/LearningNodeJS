import React, { FC, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import { useRoutes } from "./hooks/useRoutes";
import {
  useAppDispatch,
  useAppSelector,
  initialize,
  setIsModalOpen,
} from "../redux";

import { Header } from "../moleculas/header";
import { Login } from "../moleculas/login";
import { Modal } from "../components/modal";
import { Loader } from "../components/loader";

// import { ProjectsPage } from "./ProjectsPage";
// import { WelcomePage } from "./WelcomePage";

const MainStyled = styled.div`
  min-width: 1024px;
  color: ${({ theme }) => theme.text.dark};
`;

export const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const { userID, isModalOpen } = useAppSelector((state) => state.auth);

  const routes = useRoutes(!!userID);

  useEffect(() => {
    dispatch(initialize());
  }, []);

  if (!userID) return <Loader />;

  return (
    <MainStyled>
      <Header openLogin={() => dispatch(setIsModalOpen(true))} />

      {routes}

      <Modal open={isModalOpen} onClose={() => dispatch(setIsModalOpen(false))}>
        <Login close={() => dispatch(setIsModalOpen(false))} />
      </Modal>
    </MainStyled>
  );
};
