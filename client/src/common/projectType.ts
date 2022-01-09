export interface Project {
  _id: string;
  title: string;
  tasks: any[];
  created?: string;
}

export interface CreateProjectResponse {
  status: number | string;
  message: string;
  project: any;
}

export interface GetAvailableProjectsResponse {
  status: number | string;
  availableProjects: Project[];
}
