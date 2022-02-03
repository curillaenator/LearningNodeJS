import axios from "axios";

import {
  Project,
  CreateProjectResponse,
  GetAvailableProjectsResponse,
} from "@src/common";

const base = axios.create({ baseURL: "http://localhost:3300/api/" });

interface ProjectsAPI {
  createProject: (
    project: Project,
    token: string
  ) => Promise<CreateProjectResponse | string>;

  getAvailableProjects: (
    token: string
  ) => Promise<GetAvailableProjectsResponse | string>;
}

export const projectsAPI: ProjectsAPI = {
  createProject: (project, token) => {
    base.defaults.headers.common["Authorization"] = token;

    return base
      .post("/projects/create", project)
      .then((r) => r.data)
      .catch((err) => {
        const errParsed = err.toJSON();
        return errParsed.message;
      });
  },

  getAvailableProjects: (token) => {
    base.defaults.headers.common["Authorization"] = token;

    return base
      .get("/projects/owned")
      .then((r) => r.data)
      .catch((err) => {
        const errParsed = err.toJSON();
        return errParsed.message;
      });
  },
};
