import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { TITLES } from "./constants";
import { LinkProps, LinkTags } from "./interfaces";

interface LinkStyledProps {
  tag: LinkTags;
}

const LinkStyled = styled(Link)<LinkStyledProps>`
  font-family: ${({ tag }) =>
    TITLES.includes(tag) ? '"Roboto Condensed", sans-serif' : "unset"};
  color: ${({ theme, tag }) =>
    TITLES.includes(tag) ? theme.text.primary : theme.text.link};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.text.primary};
    transition: 0.08s linear;
  }
`;

export const Component: FC<LinkProps> = (props) => {
  const { to, tag = "span", children, className } = props;

  const InnerComponent = tag as React.ElementType;

  console.log(to);

  return (
    <div className={className}>
      <LinkStyled to={to} tag={tag}>
        <InnerComponent>{children}</InnerComponent>
      </LinkStyled>
    </div>
  );
};
