import React, { FC } from "react";
import styled from "styled-components";

interface TextareaStyledProps {
  resize: "none" | "both" | "horizontal" | "vertical";
}

const TextareaStyled = styled.div<TextareaStyledProps>`
  width: 100%;

  textarea {
    width: 100%;
    padding: 16px;
    border-radius: 16px;
    resize: ${({ resize }) => resize};
    height: 20rem;
    background-color: ${({ theme }) => theme.bg.lightGray};
  }
`;

interface TextareaProps {
  resize?: "none" | "both" | "horizontal" | "vertical";
  value: string;
  onChange: (description: string) => void;
}

export const Textarea: FC<TextareaProps> = (props) => {
  const { value, onChange, resize = "none" } = props;

  return (
    <TextareaStyled resize={resize}>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} />
    </TextareaStyled>
  );
};
