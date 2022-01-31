import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useAppSelector, useAppDispatch, getOpenedTask } from "@src/redux";

const TaskPageStyled = styled.div``;

export const TaskPage: FC = () => {
  const appDispatch = useAppDispatch();
  const task = useAppSelector((state) => state.tasks.openedTask);

  const { projectId, taskId } =
    useParams<{ projectId: string; taskId: string }>();

  console.log(projectId, taskId);

  useEffect(() => {
    appDispatch(getOpenedTask(taskId || ""));
  }, [taskId]);

  return (
    <TaskPageStyled>
      {task?.title}
      {task?.description}
    </TaskPageStyled>
  );
};
