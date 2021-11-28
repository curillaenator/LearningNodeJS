import { FormEvent } from "react";

interface Credentials {
  email: string;
  password: string;
}

export interface LoginProps {
  signIn: (credentials: Credentials) => void;
  signUp: (credentials: Credentials) => void;
  close: () => void;
}

export interface FormErrors {
  email?: string;
  password?: string;
}

export type UseFormHook = (
  signIn: LoginProps["signIn"],
  signUp: LoginProps["signUp"],
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
