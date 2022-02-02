import React, { FC } from "react";
import styled from "styled-components";

import { PRIORITY_ASSOC } from "./constants";
import { PriorityProps, PriorityStyledProps } from "./interfaces";

const PriorityStyled = styled.div<PriorityStyledProps>`
  display: flex;
  align-items: center;
  gap: 8px;

  .priority-title {
    font-size: 12px;
  }

  .priority-icon {
    width: 16px;
    height: 16px;
    fill: ${({ priority, theme }) => theme.icons.priorities[priority]};

    transform: ${({ priority }) => {
      switch (priority) {
        case "highest":
        case "high":
          return "rotate(-90deg)";

        case "lowest":
        case "low":
          return "rotate(90deg)";

        default:
          return "unset";
      }
    }};
  }
`;

export const Priority: FC<PriorityProps> = (props) => {
  const { priority } = props;

  return (
    <PriorityStyled priority={priority}>
      {PRIORITY_ASSOC[priority]}
      <span className="priority-title">{priority}</span>
    </PriorityStyled>
  );
};
