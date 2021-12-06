import { FormEvent } from "react";

export interface ProfileProps {
  close: () => void;
}

export interface FormState {
  isIdHidden: boolean;
  userId: string;
  userName: string;
}

export interface FormHandlers {
  setUsername: (name: string) => void;
  setIdHidden: () => void;
}

export type UseProfileForm = () => [
  FormState,
  FormHandlers,
  (e: FormEvent) => void
];
