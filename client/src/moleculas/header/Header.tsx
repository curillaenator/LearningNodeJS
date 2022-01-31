import React, { FC } from "react";
import styled from "styled-components";
import { Link, useParams, generatePath } from "react-router-dom";
import { Pathes } from "@src/routes";

import { useAppSelector, useAppDispatch, setAuthModalOpen } from "@src/redux";

import { User, UserMenu } from "./components";
import { Button } from "@src/components/buttons";
import { Dropdown } from "@src/components/dropdown";

// import { HeaderProps } from "./interfaces";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.bg.dark};

  .app-title {
    font-family: "Roboto Condensed", sans-serif;
    color: ${({ theme }) => theme.text.primary};
  }
`;

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { userID, userName, avatarURL } = useAppSelector((state) => state.auth);

  const { projectId } = useParams<{ projectId: string }>();

  return (
    <HeaderStyled>
      <Link
        to={generatePath(
          projectId ? Pathes.project : Pathes.root,
          projectId ? { projectId } : {}
        )}
        className="app-title"
      >
        TaskMan
      </Link>

      {userID && (
        <Dropdown
          offsetY={12}
          trigger={(open) => (
            <div>
              <User open={open} name={userName} avatarURL={avatarURL} />
            </div>
          )}
        >
          {(close: () => void) => <UserMenu close={close} />}
        </Dropdown>
      )}

      {!userID && (
        <Button
          title="Sign in"
          icon="login"
          size="m"
          onClick={() => dispatch(setAuthModalOpen(true))}
        />
      )}
    </HeaderStyled>
  );
};
