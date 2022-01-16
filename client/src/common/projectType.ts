export interface Project {
  _id: string;
  title: string;
  tasks: string[];
  created?: string;
}

export interface CreateProjectResponse {
  status: number | string;
  message: string;
  project: Project;
}

export interface GetAvailableProjectsResponse {
  status: number | string;
  availableProjects: Project[];
}
