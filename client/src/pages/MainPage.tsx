import React, { FC, useState } from "react";
import styled from "styled-components";

import { Header } from "../moleculas/header";
import { Login } from "../moleculas/login";
import { Modal } from "../components/modal";

const MainStyled = styled.div`
  min-width: 320px;
  color: ${({ theme }) => theme.text.dark};
`;

export const MainPage: FC = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <MainStyled>
      <Header openLogin={() => setLoginOpen(true)} />

      <p>Some text here</p>

      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <Login close={() => setLoginOpen(false)} submit={() => {}} />
      </Modal>
    </MainStyled>
  );
};
