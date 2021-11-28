import React, { FC } from "react";
import styled from "styled-components";

import { PARAMS } from "./constants";
import { icons } from "./assets/icons";
import { ButtonProps, ButtonParams } from "./interfaces";

interface IButtonStyled {
  params: ButtonParams;
}

const ButtonStyled = styled.button<IButtonStyled>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ params }) => params.gap};
  height: ${({ params }) => params.h};
  padding: ${({ params }) => params.padding};
  background-color: ${({ theme }) => theme.bg.primary};
  border-radius: ${({ params }) => params.radius};
  box-shadow: ${({ theme }) => theme.shadows.buttons};
  transition: 0.08s linear;

  &:hover {
    background-color: ${({ theme }) => theme.bg.primaryHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.bg.primaryActive};
    box-shadow: none;
  }

  .button-icon {
    width: ${({ params }) => params.iconsize};
    height: ${({ params }) => params.iconsize};

    &-light {
      fill: ${({ theme }) => theme.text.light};
    }

    &-dark {
      fill: ${({ theme }) => theme.text.dark};
    }
  }

  .button-title {
    font-size: ${({ params }) => params.fontsize};
  }
`;

export const Button: FC<ButtonProps> = (props) => {
  const { title, icon, size = "l", type = "button", onClick } = props;

  return (
    <ButtonStyled type={type} params={PARAMS[size]} onClick={onClick}>
      {icon && icons[icon]}

      <span className="button-title">{title}</span>
    </ButtonStyled>
  );
};
