import React, { FC } from "react";
import styled from "styled-components";

import { RADIO_PARAMS } from "./constants";
import { RadioProps, RadioStyledProps } from "./interfaces";

const RadioStyled = styled.button<RadioStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ params }) => params.gap};
  height: ${({ params }) => params.h};
  padding: ${({ params }) => params.padding};
  border-radius: ${({ params }) => params.radius};
  background-color: ${({ theme }) => theme.bg.lightGray};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  transition: 0.08s linear;

  .radio-glyph {
    width: ${({ params }) => params.glyphSize};
    height: ${({ params }) => params.glyphSize};
    border-radius: 50%;
    box-shadow: inset 0 0 0
      ${({ params, theme, checked }) =>
        `${checked ? params.borderChecked : params.borderUnchecked} ${
          theme.text.dark
        }`};
  }

  .radio-title {
    font-size: ${({ params }) => params.fontsize};
    color: ${({ theme }) => theme.text.dark};
    font-weight: 700;
  }
`;

export const Radio: FC<RadioProps> = (props) => {
  const { id, title, size = "l", disabled = false, checked, onChange } = props;

  return (
    <RadioStyled
      params={RADIO_PARAMS[size]}
      disabled={disabled}
      checked={checked}
      onClick={() => onChange(id)}
      type="button"
    >
      <div className="radio-glyph" />

      <span className="radio-title">{title}</span>
    </RadioStyled>
  );
};
