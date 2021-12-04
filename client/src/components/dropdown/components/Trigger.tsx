import React, { FC } from "react";
import styled from "styled-components";

import { PARAMS, CARET } from "./constants";
import { TriggerProps, ButtonParams } from "./interfaces";

interface TriggerStyledProps {
  active: boolean;
  params: ButtonParams;
}

const TriggerStyled = styled.div<TriggerStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ params }) => params.gap};
  height: ${({ params }) => params.h};
  padding: ${({ params }) => params.iconPadding};
  border-radius: ${({ params }) => params.radius};
  background-color: ${({ theme }) => theme.bg.light};
  cursor: pointer;
  transition: 0.08s linear;

  .triger-icon {
    width: ${({ params }) => params.iconsize};
    height: ${({ params }) => params.iconsize};
    transform: ${({ active }) => (active ? "rotateZ(180deg)" : "rotateZ(0)")};

    &-dark {
      fill: ${({ theme, active }) =>
        active ? theme.icons.dark : theme.icons.gray};
    }
  }

  .triger-title {
    font-size: ${({ params }) => params.fontsize};
    color: ${({ theme, active }) =>
      active ? theme.text.dark : theme.text.gray};
  }

  &:hover {
    .triger-icon {
      &-dark {
        fill: ${({ theme }) => theme.icons.dark};
      }
    }

    .triger-title {
      color: ${({ theme }) => theme.text.dark};
    }
  }

  &:active {
    .triger-icon {
      &-dark {
        fill: ${({ theme }) => theme.icons.primaryActive};
      }
    }

    .triger-title {
      color: ${({ theme }) => theme.text.primaryActive};
    }
  }
`;

export const Trigger: FC<TriggerProps> = (props) => {
  const { title, active, size = "l" } = props;

  return (
    <TriggerStyled active={active} params={PARAMS[size]}>
      {CARET}

      <span className="triger-title">{title}</span>
    </TriggerStyled>
  );
};
