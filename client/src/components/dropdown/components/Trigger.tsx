import React, { FC } from "react";
import styled from "styled-components";

import { PARAMS, CARET } from "./constants";
import { TriggerProps, ButtonParams } from "./interfaces";

interface TriggerStyledProps {
  active: boolean;
  disabled: boolean;
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
  box-shadow: ${({ theme, active }) => (active ? theme.shadows.base : "none")};

  .trigger-icon {
    width: ${({ params }) => params.iconsize};
    height: ${({ params }) => params.iconsize};
    transform: ${({ active }) => (active ? "rotateZ(180deg)" : "rotateZ(0)")};

    &-dark {
      fill: ${({ theme, active }) =>
        active ? theme.icons.dark : theme.icons.gray};
    }
  }

  .trigger-title {
    user-select: none;
    font-size: ${({ params }) => params.fontsize};
    color: ${({ theme, active }) =>
      active ? theme.text.dark : theme.text.gray};
  }

  &:hover {
    .trigger-icon {
      &-dark {
        fill: ${({ theme, disabled }) => {
          if (disabled) return theme.icons.gray;
          return theme.icons.dark;
        }};
      }
    }

    .trigger-title {
      color: ${({ theme, disabled }) => {
        if (disabled) return theme.text.gray;
        return theme.text.dark;
      }};
    }
  }

  &:active {
    .trigger-icon {
      &-dark {
        fill: ${({ theme, disabled }) => {
          if (disabled) return theme.icons.gray;
          return theme.icons.primaryActive;
        }};
      }
    }

    .trigger-title {
      color: ${({ theme, disabled }) => {
        if (disabled) return theme.text.gray;
        return theme.text.primaryActive;
      }};
    }
  }
`;

export const Trigger: FC<TriggerProps> = (props) => {
  const { title, active = false, size = "l", disabled = false } = props;

  return (
    <TriggerStyled active={active} disabled={disabled} params={PARAMS[size]}>
      {CARET}

      {title && <span className="trigger-title">{title}</span>}
    </TriggerStyled>
  );
};
