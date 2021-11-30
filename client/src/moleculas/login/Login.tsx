import React, { FC } from "react";
import styled from "styled-components";

import { useForm } from "./hooks/useForm";

import { Button } from "../../components/buttons";
import { TextInput, Switch } from "../../components/inputs";

import { LoginProps } from "./interfaces";

const FormStyled = styled.form`
  width: 100%;
  max-width: 420px;
  min-width: 320px;
  padding: 32px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.bg.light};
  box-shadow: ${({ theme }) => theme.shadows.base};

  .form-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
  }

  .form-inputs {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;

    &-server {
      font-size: 11px;
      text-align: center;
      color: ${({ theme }) => theme.text.danger};
    }
  }

  .form-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 16px;
    }
  }
`;

export const Login: FC<LoginProps> = ({ close }) => {
  const [
    isRegister,
    setIsRedister,
    email,
    setEmail,
    password,
    setPassword,
    errors,
    onSubmit,
    getDescription,
  ] = useForm(close);

  return (
    <FormStyled onSubmit={onSubmit}>
      <div className="form-header">
        <h1 className="form-header-title">
          {isRegister ? "Sign Up" : "Sign In"}
        </h1>

        {!isRegister && <Button isGhost title="Remind password" size="s" />}
      </div>

      <div className="form-inputs">
        <TextInput
          state={errors.email ? "error" : "normal"}
          description={getDescription("email")}
          name="email"
          iconName="email"
          placeholder="Email"
          type="email"
          value={email}
          limitSymbols={isRegister ? 48 : undefined}
          onChange={setEmail}
        />

        <TextInput
          state={errors.password ? "error" : "normal"}
          description={getDescription("password")}
          name="password"
          iconName="password"
          placeholder="Password"
          type="password"
          value={password}
          limitSymbols={isRegister ? 24 : undefined}
          onChange={setPassword}
        />

        {errors.server && (
          <div className="form-inputs-server">{errors.server}</div>
        )}
      </div>

      <div className="form-footer">
        <Switch
          value={isRegister}
          title="I'm a new user"
          onChange={setIsRedister}
        />

        <div className="form-footer-buttons">
          <Button title="Close" type="button" onClick={close} isGhost />

          <Button
            title={isRegister ? "Sign up" : "Sign in"}
            icon={isRegister ? "pencil" : "login"}
            type="submit"
          />
        </div>
      </div>
    </FormStyled>
  );
};
