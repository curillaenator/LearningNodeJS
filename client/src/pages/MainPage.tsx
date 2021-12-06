import React, { FC } from "react";
import styled from "styled-components";

import { useMainPage } from "./hooks/useMainPage";

import { Header } from "../moleculas/header";
import { Login } from "../moleculas/login";
import { Profile } from "../moleculas/profile";
import { Modal } from "../components/modal";
// import { Loader } from "../components/loader";

const MainStyled = styled.div`
  min-width: 1024px;
  color: ${({ theme }) => theme.text.dark};
`;

export const MainPage: FC = () => {
  const [
    routes,
    isAuthModalOpen,
    isProfileModalOpen,
    closeAuthModal,
    closeProfileModal,
  ] = useMainPage();

  // if (!userID) return <Loader />; ???

  return (
    <MainStyled>
      <Header />

      {routes}

      <Modal open={isAuthModalOpen} onClose={closeAuthModal}>
        <Login close={closeAuthModal} />
      </Modal>

      <Modal open={isProfileModalOpen} onClose={closeProfileModal}>
        <Profile close={closeProfileModal} />
      </Modal>
    </MainStyled>
  );
};
