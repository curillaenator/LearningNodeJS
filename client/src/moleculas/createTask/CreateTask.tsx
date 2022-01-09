import React, { FC, useMemo } from "react";
import styled from "styled-components";

import { useCreateTaskForm } from "./hooks/useCreateTaskForm";

import { Button } from "../../components/buttons";
import { TextInput, Radio, Textarea } from "../../components/inputs";
import { Dropdown } from "../../components/dropdown";
import { Loader } from "../../components/loader";

import { CreateTaskProps } from "./interfaces";
import { TaskStatuses } from "../../common";

const CreateTaskStyled = styled.form`
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

    &-taskname {
      width: 100%;
      font-family: "Roboto Condensed", sans-serif;
      font-size: 32px;
      font-weight: 700;
      background-color: ${({ theme }) => theme.bg.transparent};

      &::placeholder {
        color: ${({ theme }) => theme.text.gray};
      }
    }
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

export const CreateTask: FC<CreateTaskProps> = ({ close }) => {
  const { values, handlers, submit } = useCreateTaskForm(close);

  return (
    <CreateTaskStyled onSubmit={submit}>
      <div className="form-header">
        <input
          type="text"
          className="form-header-taskname"
          placeholder="Name your task"
          value={values.title}
          onChange={(e) => handlers.setTitle(e.target.value)}
        />
      </div>

      <div className="form-body">
        <div className="form-body-block">
          <h3 className="form-body-block-title">Task description</h3>

          <div className="form-body-block-inputs">
            {/* <TextInput
              state={errors.title ? "error" : "normal"}
              description={getDescription("title")}
              iconName="pencil"
              name="projectTitle"
              placeholder="Task name"
              value={values.title}
              onChange={handlers.setTitle}
            /> */}

            <Textarea
              value={values.description}
              onChange={handlers.setDescription}
            />
          </div>
        </div>

        <div className="form-body-block">
          <h3 className="form-body-block-title">Task settings</h3>

          <div className="form-body-block-inputs">
            <div className="select-status">
              <Radio
                title="Open"
                size="m"
                id={TaskStatuses.open}
                checked={values.status === TaskStatuses.open}
                onChange={() => handlers.setStatus(TaskStatuses.open)}
              />

              <Radio
                title="In progress"
                size="m"
                id={TaskStatuses.inProgress}
                checked={values.status === TaskStatuses.inProgress}
                onChange={() => handlers.setStatus(TaskStatuses.inProgress)}
              />

              <Radio
                title="Done"
                size="m"
                id={TaskStatuses.done}
                checked={values.status === TaskStatuses.done}
                onChange={() => handlers.setStatus(TaskStatuses.done)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="form-buttons">
        <Button
          variant="ghost"
          title="Close"
          onClick={close}
          // disabled={loading}
        />

        <Button
          icon="pencil"
          type="submit"
          title="Create task"
          // disabled={loading}
        />
      </div>
    </CreateTaskStyled>
  );
};
