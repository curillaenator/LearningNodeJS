import React, { FC } from "react";
import styled from "styled-components";
import { icon } from "./icon";

interface LoaderStyledProps {
  width: string;
  height: string;
}

const LoaderStyled = styled.div<LoaderStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  .loader-icon {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  }
`;

interface LoaderProps {
  size?: "s" | "m" | "l";
}

export const Loader: FC<LoaderProps> = (props) => {
  const { size = "l" } = props;

  const sizes = {
    s: { w: "32px", h: "32px" },
    m: { w: "48px", h: "48px" },
    l: { w: "64px", h: "64px" },
  };

  return (
    <LoaderStyled width={sizes[size].w} height={sizes[size].h}>
      {icon}
    </LoaderStyled>
  );
};
