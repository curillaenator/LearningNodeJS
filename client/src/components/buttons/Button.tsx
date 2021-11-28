import React, { FC } from "react";
import styled from "styled-components";

import { PARAMS } from "./constants";
import { icons } from "./assets/icons";
import { ButtonProps, ButtonParams } from "./interfaces";

interface IButtonStyled {
  params: ButtonParams;
  isGhost: boolean;
  isIcon: boolean;
}

const ButtonStyled = styled.button<IButtonStyled>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ params }) => params.gap};
  height: ${({ params }) => params.h};
  padding: ${({ params, isIcon }) =>
    isIcon ? params.iconPadding : params.padding};
  background-color: ${({ theme, isGhost }) =>
    isGhost ? "transparent" : theme.bg.primary};
  border-radius: ${({ params }) => params.radius};
  box-shadow: ${({ theme, isGhost }) =>
    isGhost ? "none" : theme.shadows.buttons};
  transition: 0.08s linear;

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
    color: ${({ theme, isGhost }) =>
      isGhost ? theme.text.placeholder : theme.text.dark};
  }

  &:hover {
    background-color: ${({ theme, isGhost }) =>
      isGhost ? "transparent" : theme.bg.primaryHover};

    .button-title {
      color: ${({ theme }) => theme.text.dark};
    }
  }

  &:active {
    background-color: ${({ theme, isGhost }) =>
      isGhost ? "transparent" : theme.bg.primaryActive};
    box-shadow: ${({ theme, isGhost }) =>
      isGhost ? "none" : theme.shadows.buttontsActive};

    .button-title {
      color: ${({ theme }) => theme.primary[700]};
    }
  }
`;

export const Button: FC<ButtonProps> = (props) => {
  const {
    title,
    icon,
    size = "l",
    isGhost = false,
    type = "button",
    onClick,
  } = props;

  return (
    <ButtonStyled
      type={type}
      params={PARAMS[size]}
      isIcon={!!icon}
      isGhost={isGhost}
      onClick={onClick}
    >
      {icon && icons[icon]}

      <span className="button-title">{title}</span>
    </ButtonStyled>
  );
};
