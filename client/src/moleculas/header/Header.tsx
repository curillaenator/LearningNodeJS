import React, { FC } from "react";
import styled from "styled-components";
import { useParams, generatePath } from "react-router-dom";
import { Pathes } from "@src/routes";

import { useAppSelector, useAppDispatch, setAuthModalOpen } from "@src/redux";

import { User, UserMenu } from "./components";
import { Toolbar } from "./components/toolbar";

import { Link } from "@src/components/link";
import { Button } from "@src/components/buttons";
import { Dropdown } from "@src/components/dropdown";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  width: 100%;
  height: 80px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.bg.dark};
`;

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { userID, userName, avatarURL } = useAppSelector((state) => state.auth);

  const { projectId, taskId } =
    useParams<{ projectId: string; taskId: string }>();

  return (
    <HeaderStyled>
      <Link
        tag="h1"
        to={generatePath(
          projectId ? Pathes.project : Pathes.root,
          projectId ? { projectId } : {}
        )}
      >
        TaskMan
      </Link>

      {userID && !taskId && <Toolbar />}

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
