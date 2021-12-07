import { Project } from "../../common";

export type UseRoutesHook = (isUserAuthed: boolean) => JSX.Element;

export type UseMainPage = () => [
  JSX.Element,
  boolean,
  boolean,
  () => void,
  () => void
];

export type UseProjectsPage = () => [
  Project | null,
  boolean,
  boolean,
  () => void,
  () => void
];
