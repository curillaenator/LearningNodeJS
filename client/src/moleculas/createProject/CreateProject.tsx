import React, { FC } from "react";
import styled from "styled-components";

import { Button } from "../../components/buttons";
import { Loader } from "../../components/loader";
import { TextInput } from "../../components/inputs";

import { useCreateProjectForm } from "./hooks/useCreateProjectForm";

import { CreateProjectProps } from "./interface";

const CreateProjectStyled = styled.form`
  width: 80%;
  padding: 48px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.bg.light};
  box-shadow: ${({ theme }) => theme.shadows.base};

  .form-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
  }

  .form-body {
    display: flex;
    gap: 32px;
    margin-bottom: 32px;

    &-block {
      width: 50%;

      &-title {
        margin-bottom: 16px;
      }

      &-inputs {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }
  }

  .form-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
  }
`;

export const CreateProject: FC<CreateProjectProps> = ({ close }) => {
  const [values, handlers, submit, errors, getDescription, loading] =
    useCreateProjectForm();

  return (
    <CreateProjectStyled onSubmit={submit}>
      <div className="form-header">
        <h1 className="form-header-title">Create new project</h1>
        {loading && <Loader size="s" />}
      </div>

      <div className="form-body">
        <div className="form-body-block">
          <h3 className="form-body-block-title">Project meta</h3>

          <div className="form-body-block-inputs">
            <TextInput
              state={errors.title ? "error" : "normal"}
              description={getDescription("title")}
              iconName="pencil"
              name="projectTitle"
              placeholder="Name your project"
              value={values.title}
              onChange={handlers.setProjectTitle}
            />
          </div>
        </div>

        <div className="form-body-block">
          <h3 className="form-body-block-title">Project settings</h3>

          <div className="form-body-block-inputs"></div>
        </div>
      </div>

      <div className="form-buttons">
        <Button
          variant="ghost"
          title="Close"
          onClick={close}
          disabled={loading}
        />

        <Button
          icon="add"
          type="submit"
          title="Create project"
          disabled={loading}
        />
      </div>
    </CreateProjectStyled>
  );
};
