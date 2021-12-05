import { Project } from "../../common";

export type UseRoutesHook = (isUserAuthed: boolean) => JSX.Element;

export type UseProjectsPage = () => [Project | null, boolean, () => void];
