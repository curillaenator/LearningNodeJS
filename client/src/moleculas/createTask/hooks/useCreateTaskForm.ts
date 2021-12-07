import { FormEvent, useState, useCallback } from "react";

import { UseCreateTaskForm } from "../interfaces";

export const useCreateTaskForm: UseCreateTaskForm = () => {
  const [values, setValues] = useState({
    taskId: "",
    title: "",
    status: "",
    created: "",
    finished: "",
    executor: "",
    layout: "",
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();
  };

  return [submit];
};
