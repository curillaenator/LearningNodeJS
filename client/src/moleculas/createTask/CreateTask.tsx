import React, { FC } from "react";
import styled from "styled-components";

import { useCreateTaskForm, usePriorityList, useStatusList } from "./hooks";

import { Button } from "@src/components/buttons";
import { Radio, Textarea } from "@src/components/inputs";
// import { Loader } from "../../components/loader";

import { CreateTaskProps } from "./interfaces";

const CreateTaskStyled = styled.form`
  width: 80%;
  padding: 48px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.bg.light};
  box-shadow: ${({ theme }) => theme.shadows.base};

  .header {
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

  .body {
    display: flex;
    gap: 32px;
    margin-bottom: 32px;

    &-block {
      width: 50%;

      &-title {
        margin-bottom: 16px;
      }

      &-inputs {
        margin-bottom: 16px;

        &-title {
          margin-bottom: 8px;
        }

        &-map {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
      }
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
  }
`;

export const CreateTask: FC<CreateTaskProps> = ({ close }) => {
  const { values, handlers, submit } = useCreateTaskForm(close);
  const statusList = useStatusList(values.status, handlers.setStatus);
  const priorityList = usePriorityList(values.priority, handlers.setPriotity);

  return (
    <CreateTaskStyled onSubmit={submit}>
      <div className="header">
        <input
          type="text"
          className="header-taskname"
          placeholder="Name your task"
          value={values.title}
          onChange={(e) => handlers.setTitle(e.target.value)}
        />
      </div>

      <div className="body">
        <div className="body-block">
          <h3 className="body-block-title">Task description</h3>

          <div className="body-block-inputs">
            <Textarea
              value={values.description}
              onChange={handlers.setDescription}
            />
          </div>
        </div>

        <div className="body-block">
          <h3 className="body-block-title">Task settings</h3>

          <div className="body-block-inputs">
            <h4 className="body-block-inputs-title">Task status:</h4>

            <div className="body-block-inputs-map">
              {statusList.map((radioProps) => (
                <Radio {...radioProps} key={radioProps.id} />
              ))}
            </div>
          </div>

          <div className="body-block-inputs">
            <h4 className="body-block-inputs-title">Task priority:</h4>

            <div className="body-block-inputs-map">
              {priorityList.map((radioProps) => (
                <Radio {...radioProps} key={radioProps.id} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="buttons">
        <Button variant="ghost" title="Close" onClick={close} />

        <Button
          icon="pencil"
          type="submit"
          title="Create task"
          disabled={!values.title || !values.description}
        />
      </div>
    </CreateTaskStyled>
  );
};
