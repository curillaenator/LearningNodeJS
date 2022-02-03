import React, { FC } from "react";
import styled from "styled-components";

import { PARAMS } from "./constants";
import { BadgeProps, BadgeStyledProps } from "./interfaces";

const BadgeStyled = styled.div<BadgeStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ params }) => params.gap};
  flex-shrink: 0;
  width: fit-content;
  height: ${({ params }) => params.h};
  padding: ${({ params }) => params.padding};
  background-color: ${({ theme, status }) =>
    status ? theme.bg.statuses[status] : theme.bg.primary};
  border-radius: ${({ params }) => params.radius};
  font-size: ${({ params }) => params.fontsize};
  color: ${({ theme, status }) => (status ? theme.white : theme.text.dark)};
`;

export const Badge: FC<BadgeProps> = (props) => {
  const { title, size = "l", status } = props;

  return (
    <BadgeStyled params={PARAMS[size]} status={status}>
      {title}
    </BadgeStyled>
  );
};
