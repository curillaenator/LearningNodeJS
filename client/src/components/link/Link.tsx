import React, { FC } from "react";
import styled from "styled-components";
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
      TITLES.includes(tag) ? theme.text.primaryHover : theme.text.gray};

    filter: ${({ theme }) => `drop-shadow(${theme.dropSahdows.text})`};
  }

  &:active {
    color: ${({ theme, tag }) =>
      TITLES.includes(tag) ? theme.text.primaryActive : theme.text.dark};
  }

  .link-inner {
    width: fit-content;
  }
`;

export const Component: FC<LinkProps> = (props) => {
  const { to, tag = "span", children, className } = props;

  const InnerComponent = tag as React.ElementType;

  return (
    <div className={className}>
      <LinkStyled to={to} tag={tag}>
        <InnerComponent className="link-inner">{children}</InnerComponent>
      </LinkStyled>
    </div>
  );
};
