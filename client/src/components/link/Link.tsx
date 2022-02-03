import React, { FC } from "react";
import styled from "styled-components";
import cn from "classnames";
import { Link } from "react-router-dom";

import { TITLES } from "./constants";
import { LinkProps, LinkTags } from "./interfaces";

interface LinkStyledProps {
  tag: LinkTags;
}

const LinkStyled = styled(Link)<LinkStyledProps>`
  width: fit-content;
  font-family: ${({ tag }) =>
    TITLES.includes(tag) ? '"Roboto Condensed", sans-serif' : "unset"};
  color: ${({ theme, tag }) =>
    TITLES.includes(tag) ? theme.text.primary : theme.text.link};
  text-decoration: none;
  transition: 0.08s linear;
  will-change: filter;

  &:hover {
    color: ${({ theme, tag }) =>
      TITLES.includes(tag) ? theme.text.primaryHover : theme.text.primary};

    filter: ${({ theme }) => `drop-shadow(${theme.dropSahdows.text})`};
  }

  &:active {
    color: ${({ theme, tag }) =>
      TITLES.includes(tag) ? theme.text.primaryActive : theme.text.linkActive};
  }

  .link-inner {
    font-family: "Roboto Condensed", sans-serif;
    width: fit-content;
  }
`;

export const Component: FC<LinkProps> = (props) => {
  const { to, tag = "span", children, className, innerClassName } = props;

  const InnerComponent = tag as React.ElementType;

  return (
    <div className={className}>
      <LinkStyled to={to} tag={tag}>
        <InnerComponent className={cn("link-inner", innerClassName)}>
          {children}
        </InnerComponent>
      </LinkStyled>
    </div>
  );
};
