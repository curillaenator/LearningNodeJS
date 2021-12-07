import React, { FC } from "react";
import styled from "styled-components";

interface ScrollbarStyledProps {
  maxHeight: string;
  schema: "light" | "dark";
  isVisible: "auto" | "scroll";
}

const ScrollbarStyled = styled.div<ScrollbarStyledProps>`
  width: 100%;
  overflow-y: ${({ isVisible }) => isVisible};
  max-height: ${({ maxHeight }) => maxHeight};

  &::-webkit-scrollbar {
    width: 4px;
    background-color: ${({ theme }) => theme.bg.lightGray};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme, schema }) => {
      if (schema === "dark") return theme.bg.dark;
      return theme.bg.lightGray;
    }};
    border-radius: 2px;

    &:hover {
      background-color: ${({ theme }) => theme.bg.primary};
    }
  }
`;

interface ScrollbarProps {
  maxHeight?: string;
  className?: string;
  schema?: "light" | "dark";
  isVisible?: "auto" | "scroll";
}

export const Scrollbar: FC<ScrollbarProps> = (props) => {
  const {
    maxHeight = "1200px",
    schema = "light",
    isVisible = "auto",
    className,
    children,
  } = props;

  return (
    <ScrollbarStyled
      maxHeight={maxHeight}
      schema={schema}
      className={className}
      isVisible={isVisible}
    >
      {children}
    </ScrollbarStyled>
  );
};
