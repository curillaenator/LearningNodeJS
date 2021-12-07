import { FormEvent, useState, useMemo, useCallback } from "react";

import { DefaultTask } from "../../../common/taskType";
import { UseCreateTaskForm, FormValues, FormHandlers } from "../interfaces";

export const useCreateTaskForm: UseCreateTaskForm = () => {
  const [values, setValues] = useState<FormValues>(DefaultTask);

  const submit = useCallback((e: FormEvent) => {
    e.preventDefault();
  }, []);

  const handlers: FormHandlers = useMemo(
    () => ({
      setTitle: (title) => {
        setValues((prev) => ({ ...prev, title }));
      },

      setStatus: (status) => {
        setValues((prev) => ({ ...prev, status }));
      },

      setExecutor: (userId) => {
        setValues((prev) => ({ ...prev, executor: userId }));
      },
    }),
    []
  );

  return [values, handlers, submit];
};
