import React, { FC } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import { useMainPage } from "./hooks/useMainPage";

import { Header } from "@src/moleculas/header";
import { Login } from "@src/moleculas/login";
import { Profile } from "@src/moleculas/profile";
import { Modal } from "@src/components/modal";

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
