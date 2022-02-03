import React, { FC } from "react";
import styled from "styled-components";
import { TaskStatuses } from "@src/common";

import { TimingProps } from "./interfaces";

const TimingStyled = styled.div``;

const getFullHours = (ms: number) => Math.floor(ms / 3600000);
const getMinutes = (fh: number, ms: number) =>
  Math.floor((ms - fh * 3600000) / 60000);

export const Timing: FC<TimingProps> = (props) => {
  const { status, created, progressed, finished } = props;

  const times: Record<TaskStatuses, number> = {
    //@ts-ignore
    open: Date.now() - new Date(created),
    //@ts-ignore
    inProgress: Date.now() - new Date(progressed || 0),
    //@ts-ignore
    done: new Date(finished || 0) - new Date(created),
  };

  const hours = getFullHours(times[status]);
  const minutes = getMinutes(hours, times[status]);

  return (
    <TimingStyled>
      {status === TaskStatuses.open && (
        <span>{`Opened ${hours}h ${minutes}mins`}</span>
      )}
      {status === TaskStatuses.inProgress && (
        <span>{`In progress ${hours}h ${minutes}mins`}</span>
      )}
      {status === TaskStatuses.done && (
        <span>{`Accomplished in ${hours}h ${minutes}mins`}</span>
      )}
    </TimingStyled>
  );
};
