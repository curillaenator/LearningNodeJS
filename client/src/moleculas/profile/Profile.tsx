import React, { FC } from "react";
import styled from "styled-components";

import { useProfileForm } from "./hooks/useProfileForm";

import { Button } from "../../components/buttons";
import { TextInput } from "../../components/inputs";

import { ProfileProps } from "./interfaces";

const ProfileStyled = styled.form`
  width: 50%;
  padding: 48px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.bg.light};
  box-shadow: ${({ theme }) => theme.shadows.base};

  .form-header {
    margin-bottom: 32px;

    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &-subtitle {
      display: flex;
      align-items: center;
      min-height: 32px;
      color: ${({ theme }) => theme.text.gray};
    }
  }

  .form-inputs {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .form-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
  }
`;

export const Profile: FC<ProfileProps> = ({ close }) => {
  const [values, handlers, submit] = useProfileForm();

  return (
    <ProfileStyled onSubmit={submit}>
      <div className="form-header">
        <div className="form-header-title">
          <h1>Manage your profile</h1>

          {/* {loading && <Loader size="s" />} */}
        </div>

        <div className="form-header-subtitle">
          <span>{`ID: ${values.isIdHidden ? "" : values.userId}`}</span>

          {values.isIdHidden && (
            <Button
              variant="ghost"
              icon="eye"
              size="m"
              onClick={handlers.setIdHidden}
            />
          )}
        </div>
      </div>

      <div className="form-inputs">
        <TextInput
          // state={errors.title ? "error" : "normal"}
          // description={getDescription("title")}
          iconName="pencil"
          name="projectTitle"
          placeholder="Your full name"
          value={values.userName}
          onChange={handlers.setUsername}
        />
      </div>

      <div className="form-buttons">
        <Button
          variant="ghost"
          title="Close"
          onClick={close}
          // disabled={loading}
        />

        <Button
          icon="success"
          type="submit"
          title="Update profile"
          // disabled={loading}
        />
      </div>
    </ProfileStyled>
  );
};
