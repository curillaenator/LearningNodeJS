import { FormEvent } from "react";

export interface ProfileProps {
  close: () => void;
}

export interface FormState {
  isIdHidden: boolean;
  userId: string;
  userName: string;
  avatarURL: string;
}

export interface FormHandlers {
  setIdHidden: () => void;
  setUsername: (name: string) => void;
  setAvatarURL: (url: string) => void;
}

export type UseProfileForm = () => [
  FormState,
  FormHandlers,
  (e: FormEvent) => void
];
