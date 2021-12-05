export interface AvailableProject {
  id: string;
  title: string;
  onClick: () => void;
}

export interface ToolbarProps {
  availableProjects?: AvailableProject[];
}
