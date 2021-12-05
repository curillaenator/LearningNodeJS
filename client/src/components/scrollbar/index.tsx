import React, { FC } from "react";
import styled from "styled-components";

interface ScrollbarStyledProps {
  maxHeight: string;
}

const ScrollbarStyled = styled.div<ScrollbarStyledProps>`
  width: 100%;
  overflow-y: auto;
  max-height: ${({ maxHeight }) => maxHeight};

  &::-webkit-scrollbar {
    width: 4px;
    background-color: ${({ theme }) => theme.bg.lightGray};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.bg.gray};
    border-radius: 2px;

    &:hover {
      background-color: ${({ theme }) => theme.bg.primary};
    }
  }
`;

interface ScrollbarProps {
  maxHeight?: string;
}

export const Scrollbar: FC<ScrollbarProps> = (props) => {
  const { maxHeight = "1200px", children } = props;

  return <ScrollbarStyled maxHeight={maxHeight}>{children}</ScrollbarStyled>;
};
