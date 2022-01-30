import React, { FC } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import { useMainPage } from "../hooks";

import { Header } from "../../moleculas/header";
import { Login } from "../../moleculas/login";
import { Profile } from "../../moleculas/profile";
import { Modal } from "../../components/modal";

const PageLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1024px;
  min-height: 100vh;
  color: ${({ theme }) => theme.text.dark};
`;

export const PageLayout: FC = () => {
  const [
    isAuthModalOpen,
    isProfileModalOpen,
    closeAuthModal,
    closeProfileModal,
  ] = useMainPage();

  return (
    <PageLayoutStyled>
      <Header />

      <Outlet />

      <Modal open={isAuthModalOpen} onClose={closeAuthModal}>
        <Login close={closeAuthModal} />
      </Modal>

      <Modal open={isProfileModalOpen} onClose={closeProfileModal}>
        <Profile close={closeProfileModal} />
      </Modal>
    </PageLayoutStyled>
  );
};
