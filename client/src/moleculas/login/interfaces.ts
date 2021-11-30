import { FormEvent } from "react";

export interface LoginProps {
  close: () => void;
}

export interface FormErrors {
  email?: string;
  password?: string;
  server?: string;
}

export type UseFormHook = (
  close: LoginProps["close"]
) => [
  boolean,
  (reg: boolean) => void,
  string,
  (email: string) => void,
  string,
  (password: string) => void,
  FormErrors,
  (e: FormEvent) => void,
  (field: "email" | "password") => string
];
