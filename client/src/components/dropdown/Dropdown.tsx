import React, { FC } from "react";
import Popup from "reactjs-popup";
import styled, { keyframes } from "styled-components";

import { DropdownProps } from "./interfaces";

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(32px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PopupStyled = styled(Popup)`
  &-overlay {
  }

  &-content {
    width: fit-content;
    background-color: transparent;
    animation: ${appear} 0.2s ease-out;
  }
`;

export const Dropdown: FC<DropdownProps> = (props) => {
  const { trigger, position = "bottom right", offsetY = 0, children } = props;

  return (
    <PopupStyled
      trigger={trigger}
      position={position}
      offsetY={offsetY}
      arrow={false}
    >
      {children}
    </PopupStyled>
  );
};
