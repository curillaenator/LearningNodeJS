import React, { FC } from "react";
import styled from "styled-components";

import { PARAMS } from "./constants";
import { icons } from "./assets/icons";
import { ButtonProps, ButtonParams } from "./interfaces";
import { styles } from "./styles";

interface IButtonStyled {
  params: ButtonParams;
  disabled: boolean;
  variant: Extract<ButtonProps["variant"], "primary" | "ghost">;
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
  border-radius: ${({ params }) => params.radius};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  transition: 0.08s linear;

  ${({ variant }) => styles.body[variant]};

  .button-icon {
    width: ${({ params }) => params.iconsize};
    height: ${({ params }) => params.iconsize};

    ${({ variant }) => styles.icon[variant]};
  }

  .button-title {
    font-size: ${({ params }) => params.fontsize};

    ${({ variant }) => styles.title[variant]};
  }

  &:hover {
    ${({ variant }) => styles.bodyHover[variant]};

    .button-title {
      color: ${({ theme, disabled }) =>
        disabled ? theme.text.gray : theme.text.dark};
    }

    .button-icon {
      ${({ variant }) => styles.iconHover[variant]};
    }
  }

  &:active {
    ${({ variant }) => styles.bodyActive[variant]};

    .button-title {
      color: ${({ theme, disabled }) =>
        disabled ? theme.text.gray : theme.primary[700]};
    }

    .button-icon {
      ${({ variant }) => styles.iconActive[variant]};
    }
  }
`;

export const Button: FC<ButtonProps> = (props) => {
  const {
    title,
    icon,
    size = "l",
    type = "button",
    variant = "primary",
    active = false,
    disabled = false,
    onClick,
  } = props;

  return (
    <ButtonStyled
      type={type}
      params={PARAMS[size]}
      isIcon={!!icon}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && icons[icon]}

      <span className="button-title">{title}</span>
    </ButtonStyled>
  );
};
