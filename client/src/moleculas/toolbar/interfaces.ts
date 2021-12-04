export interface AvailableProject {
  id: string;
  name: string;
}

export interface ToolbarProps {
  availableProjects?: AvailableProject[];
}
