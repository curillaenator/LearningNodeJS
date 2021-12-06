import React, { FC } from "react";
import styled from "styled-components";

import { useProfileForm } from "./hooks/useProfileForm";

import { Button } from "../../components/buttons";
import { TextInput } from "../../components/inputs";
import { Scrollbar } from "../../components/scrollbar";

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
    margin-bottom: 32px;
    padding-right: 16px;
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
          <span>{`MyID: ${values.isIdHidden ? "" : values.userId}`}</span>

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

      <Scrollbar maxHeight="272px" className="form-inputs">
        {/* <div className="form-inputs"> */}
        <TextInput
          description="you will be easily recognized by this"
          iconName="pencil"
          name="projectTitle"
          placeholder="Provide your full name"
          value={values.userName}
          onChange={handlers.setUsername}
        />

        <TextInput
          description="you will be easily recognized by this"
          iconName="pencil"
          name="projectTitle"
          placeholder="Provide your full name"
          value={values.userName}
          onChange={handlers.setUsername}
        />

        <TextInput
          description="you will be easily recognized by this"
          iconName="pencil"
          name="projectTitle"
          placeholder="Provide your full name"
          value={values.userName}
          onChange={handlers.setUsername}
        />

        <TextInput
          description="you will be easily recognized by this"
          iconName="pencil"
          name="projectTitle"
          placeholder="Provide your full name"
          value={values.userName}
          onChange={handlers.setUsername}
        />

        <TextInput
          description="you will be easily recognized by this"
          iconName="pencil"
          name="projectTitle"
          placeholder="Provide your full name"
          value={values.userName}
          onChange={handlers.setUsername}
        />
        {/* </div> */}
      </Scrollbar>

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
