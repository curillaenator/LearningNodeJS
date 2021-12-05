import { Project } from "../../../common";

interface ProjectWithHandler extends Project {
  onClick: () => void;
}

export type UseProjectToolbarMenu = () => [
  Project | null,
  ProjectWithHandler[],
  () => void,
  boolean
];
