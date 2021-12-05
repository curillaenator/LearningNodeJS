import { FormEvent } from "react";

export interface FormErrors {
  title?: string;
  server?: string;
}

export interface FormValues {
  title: string;
}

export interface FormHandlers {
  setProjectTitle: (title: string) => void;
}

export type DescriptionFileds = "title";

export type UseCreateProjectForm = () => [
  FormValues,
  FormHandlers,
  (e: FormEvent) => void,
  FormErrors,
  (field: DescriptionFileds) => string,
  boolean
];
