import { FormEvent, useState, useMemo, useCallback } from "react";
import { useAppSelector, useAppDispatch, createTask } from "../../../redux";

import { TaskType } from "../../../common";
import { INITIAL_TASK, TASK_CONFIG, STATUS_POSITION } from "./constants";
import { UseCreateTaskForm, FormHandlers } from "../interfaces";

export const useCreateTaskForm: UseCreateTaskForm = (close) => {
  const appDispatch = useAppDispatch();

  const [values, setValues] =
    useState<Omit<TaskType, "_id" | "created" | "finished">>(INITIAL_TASK);

  const currentProjectId = useAppSelector(
    (state) => state.projects.currentProject?._id
  );

  const submit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const newTask = {
        ...values,
        projectId: currentProjectId || "",
      };

      appDispatch(createTask(newTask));
      close();
    },
    [values, appDispatch]
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
