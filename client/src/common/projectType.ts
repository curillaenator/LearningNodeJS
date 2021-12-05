export interface Project {
  id?: string;
  title: string;
}

export interface CreateProjectResponse {
  status: number | string;
  message: string;
  project: any;
}
