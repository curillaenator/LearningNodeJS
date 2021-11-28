import React, { FC, useState, FormEvent } from "react";
import styled from "styled-components";

import { Button } from "../../components/buttons";
import { TextInput } from "../../components/inputs";

import { LoginProps } from "./interfaces";

const FormStyled = styled.form`
  width: 100%;
  max-width: 420px;
  min-width: 320px;
  padding: 32px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.bg.light};
  box-shadow: ${({ theme }) => theme.shadows.base};

  .form-inputs {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
  }

  .form-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
  }
`;

export const Login: FC<LoginProps> = ({ close, submit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submit");

    submit();
    close();
  };

  return (
    <FormStyled onSubmit={onSubmit}>
      <div className="form-inputs">
        <TextInput
          name="email"
          iconName="email"
          placeholder="Email"
          value={email}
          onChange={(value) => setEmail(value)}
        />

        <TextInput
          name="password"
          iconName="password"
          placeholder="Password"
          value={password}
          onChange={(value) => setPassword(value)}
        />
      </div>

      <div className="form-buttons">
        <Button title="Close" type="button" onClick={close} />
        <Button title="Login" icon="login" type="submit" />
      </div>
    </FormStyled>
  );
};
