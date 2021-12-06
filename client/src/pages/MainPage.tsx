import React, { FC, useEffect } from "react";
import styled from "styled-components";

import { useRoutes } from "./hooks/useRoutes";
import {
  useAppDispatch,
  useAppSelector,
  initialize,
  setAuthModalOpen,
  setProfileModalOpen,
} from "../redux";

import { Header } from "../moleculas/header";
import { Login } from "../moleculas/login";
import { Modal } from "../components/modal";
// import { Loader } from "../components/loader";

// import { ProjectsPage } from "./ProjectsPage";
// import { WelcomePage } from "./WelcomePage";

const MainStyled = styled.div`
  min-width: 1024px;
  color: ${({ theme }) => theme.text.dark};
`;

export const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const { userID, isAuthModalOpen, isProfileModalOpen } = useAppSelector(
    (state) => state.auth
  );

  const routes = useRoutes(!!userID);

  useEffect(() => {
    dispatch(initialize());
  }, []);

  // if (!userID) return <Loader />; ???

  return (
    <MainStyled>
      <Header openLogin={() => dispatch(setAuthModalOpen(true))} />

      {routes}

      <Modal
        open={isAuthModalOpen}
        onClose={() => dispatch(setAuthModalOpen(false))}
      >
        <Login close={() => dispatch(setAuthModalOpen(false))} />
      </Modal>

      <Modal
        open={isProfileModalOpen}
        onClose={() => dispatch(setProfileModalOpen(false))}
      >
        {/* <Login close={() => dispatch(setProfileModalOpen(false))} /> */}
      </Modal>
    </MainStyled>
  );
};
