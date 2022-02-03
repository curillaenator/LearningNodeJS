import React, { FC, useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import { useAppSelector } from "@src/redux";

import { authAPI } from "@src/api";

import { EXECUTOR_UNDEFINED } from "./constants";
import { BasicUser } from "@src/common";
import { ExecutorProps } from "./interfaces";

import { userIcons } from "@src/assets";

const ExecutorStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .avatar-common {
    width: 32px;
    height: 32px;
    fill: ${({ theme }) => theme.bg.darkGray};
  }

  .avatar-image {
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Executor: FC<ExecutorProps> = ({ executor }) => {
  const authToken = useAppSelector((state) => state.auth.token);
  const [user, setUser] = useState<BasicUser | null>(null);

  const handleExecutor = useCallback(async () => {
    if (!executor) return;
    const responsedUser = await authAPI.getUser(executor, authToken);
    if (typeof responsedUser === "string") return;
    setUser(responsedUser.basicUser);
  }, [authToken, executor]);

  useEffect(() => {
    handleExecutor();
  }, []);

  return (
    <ExecutorStyled>
      {!user?.avatarURL && userIcons.avatarDummy}

      {!!user?.avatarURL && (
        <img
          className="avatar-common avatar-image"
          src={user.avatarURL}
          alt={user.userName || EXECUTOR_UNDEFINED}
        />
      )}

      <span>{user?.userName || EXECUTOR_UNDEFINED}</span>
    </ExecutorStyled>
  );
};
