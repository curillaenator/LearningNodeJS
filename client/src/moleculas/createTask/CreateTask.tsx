import React, { FC, useMemo } from "react";
import styled from "styled-components";

import { useCreateTaskForm } from "./hooks/useCreateTaskForm";

import { Button } from "../../components/buttons";
import { TextInput, Radio } from "../../components/inputs";
import { Loader } from "../../components/loader";

import { CreateTaskProps, Statuses } from "./interfaces";

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
  const [values, handlers, submit] = useCreateTaskForm();

  return (
    <CreateTaskStyled onSubmit={submit}>
      <div className="form-header">
        <h1 className="form-header-title">New task</h1>
        {/* {loading && <Loader size="s" />} */}
      </div>

      <div className="form-body">
        <div className="form-body-block">
          <h3 className="form-body-block-title">Task meta</h3>

          <div className="form-body-block-inputs">
            <TextInput
              // state={errors.title ? "error" : "normal"}
              // description={getDescription("title")}
              iconName="pencil"
              name="projectTitle"
              placeholder="Task name"
              value={values.title}
              onChange={handlers.setTitle}
            />

            <div className="select-status">
              <Radio
                title="Open"
                size="xl"
                id={Statuses.open}
                checked={true}
                onChange={() => {}}
              />

              <Radio
                title="In progress"
                size="l"
                id={Statuses.inProgress}
                checked={false}
                onChange={() => {}}
              />

              <Radio
                title="Done"
                size="m"
                id={Statuses.done}
                checked={true}
                onChange={() => {}}
              />
            </div>
          </div>
        </div>

        <div className="form-body-block">
          <h3 className="form-body-block-title">Task settings</h3>

          <div className="form-body-block-inputs"></div>
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
