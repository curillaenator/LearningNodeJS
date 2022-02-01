import { FormEvent, useState, useMemo, useCallback } from "react";
import { useAppSelector, useAppDispatch, createTask } from "@src/redux";

import { TaskType } from "@src/common";
import {
  INITIAL_TASK,
  TASK_CONFIG,
  STATUS_POSITION,
  CREATE_TASK_ERROR_MSG,
} from "./constants";
import { UseCreateTaskForm, FormHandlers } from "../interfaces";

export const useCreateTaskForm: UseCreateTaskForm = (close) => {
  const appDispatch = useAppDispatch();

  const [values, setValues] =
    useState<Omit<TaskType, "_id" | "created" | "finished">>(INITIAL_TASK);

  const { title, description, status } = values;

  const currentProjectId = useAppSelector(
    (state) => state.projects.currentProject?._id
  );

  const submit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (!currentProjectId) {
        throw new Error("projectId is not defined");
      }

      if (!title || !description || !status) {
        throw new Error(CREATE_TASK_ERROR_MSG);
      }

      const newTask = {
        ...values,
        projectId: currentProjectId,
      };

      appDispatch(createTask(newTask));
      close();
    },
    [values, currentProjectId, close, appDispatch]
  );

  const handlers: FormHandlers = useMemo(
    () => ({
      setTitle: (title) => {
        setValues((prev) => ({ ...prev, title }));
      },

      setStatus: (status) => {
        setValues((prev) => ({
          ...prev,
          status,
          layout: JSON.stringify({
            ...TASK_CONFIG,
            x: STATUS_POSITION[status],
          }),
        }));
      },

      setPriotity: (priority) => {
        setValues((prev) => ({ ...prev, priority }));
      },

      setDescription: (description) => {
        setValues((prev) => ({ ...prev, description }));
      },

      setExecutor: (executor) => {
        setValues((prev) => ({ ...prev, executor }));
      },
    }),
    []
  );

  return { values, handlers, submit };
};
