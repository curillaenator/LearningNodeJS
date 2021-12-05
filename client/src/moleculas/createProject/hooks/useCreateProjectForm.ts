import { useState, FormEvent, useEffect } from "react";

import {
  useAppDispatch,
  useAppSelector,
  createNewProject,
} from "../../../redux";

import {
  UseCreateProjectForm,
  FormValues,
  FormHandlers,
  FormErrors,
  DescriptionFileds,
} from "./interfaces";

export const useCreateProjectForm: UseCreateProjectForm = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.projects);

  const [title, setProjectTitle] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (error) setErrors({ server: error });
  }, [error]);

  const submit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setErrors((prev) => ({ ...prev, title: "Required field" }));
    }

    if (!title.trim()) return;

    const project = { title };

    dispatch(createNewProject(project));
  };

  const formValues: FormValues = {
    title,
  };

  const formHandlers: FormHandlers = {
    setProjectTitle: (title: string) => setProjectTitle(title),
  };

  const getDescription = (field: DescriptionFileds) => {
    if (field === "title") {
      if (errors.title) return errors.title;
    }

    return "";
  };

  return [formValues, formHandlers, submit, errors, getDescription];
};
