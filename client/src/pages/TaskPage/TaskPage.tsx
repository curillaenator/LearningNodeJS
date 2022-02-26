import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import parse from "html-react-parser";

import { useAppSelector, useAppDispatch, getOpenedTask } from "@src/redux";

const TaskPageStyled = styled.div`
  padding: 16px;

  .title {
    margin-bottom: 32px;
  }

  .description {
  }
`;

export const TaskPage: FC = () => {
  const appDispatch = useAppDispatch();
  const task = useAppSelector((state) => state.tasks.openedTask);

  const { projectId, taskId } =
    useParams<{ projectId: string; taskId: string }>();

  useEffect(() => {
    appDispatch(getOpenedTask(taskId || ""));
  }, [taskId]);

  return (
    <TaskPageStyled>
      <h1 className="title">{task?.title}</h1>

      <p className="description">{parse(task?.description || "")}</p>
    </TaskPageStyled>
  );
};
