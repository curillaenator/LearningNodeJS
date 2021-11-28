import React, { FC } from "react";
import styled from "styled-components";

import { SwitchProps } from "./interfaces";

interface ISwitchStyled {
  active: boolean;
}

const SwitchStyled = styled.button<ISwitchStyled>`
  display: flex;
  align-items: center;
  gap: 8px;

  .switch-container {
    position: relative;
    flex-shrink: 0;
    width: 24px;
    height: 16px;
    border: 1px solid
      ${({ theme, active }) => (active ? theme.bg.primary : theme.lines)};
    border-radius: 8px;
    z-index: 100;

    &-toggler {
      position: absolute;
      top: 1px;
      left: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 12px;
      height: 12px;
      z-index: 50;
      background-color: ${({ theme, active }) =>
        active ? theme.bg.primary : theme.bg.lightGray};
      border-radius: 6px;
      transition: 0.12s ease-in-out;
      transform: ${({ active }) =>
        active ? "translateX(8px)" : "translateX(0)"};
    }
  }

  .switch-title {
    font-size: 11px;
    color: ${({ theme, active }) =>
      active ? theme.text.dark : theme.text.placeholder};
  }
`;

export const Switch: FC<SwitchProps> = ({ value, title, onChange }) => {
  return (
    <SwitchStyled active={value} type="button" onClick={() => onChange(!value)}>
      <div className="switch-container">
        <div className="switch-container-toggler" />
      </div>

      <span className="switch-title">{title}</span>
    </SwitchStyled>
  );
};
