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
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!email.trim()) {
      setErrors((prev) => ({ ...prev, email: "Required field" }));
    }

    if (!password.trim()) {
      setErrors((prev) => ({ ...prev, password: "Required field" }));
    }

    if (!email.trim() || !password.trim()) return;

    const creds = {
      email: email.trim(),
      password: password.trim(),
    };

    submit(creds);
    close();
  };

  return (
    <FormStyled onSubmit={onSubmit}>
      <div className="form-inputs">
        <TextInput
          state={errors.email ? "error" : "normal"}
          description={errors.email}
          name="email"
          iconName="email"
          placeholder="Email"
          value={email}
          onChange={(value) => setEmail(value)}
        />

        <TextInput
          state={errors.password ? "error" : "normal"}
          description={errors.password}
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
