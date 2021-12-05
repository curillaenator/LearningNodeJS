import axios from "axios";

import { Project, CreateProjectResponse } from "../common";

const base = axios.create({ baseURL: "http://localhost:3300/api/" });

interface ProjectsAPI {
  createProject: (project: Project) => Promise<CreateProjectResponse | string>;
}

export const projectsAPI: ProjectsAPI = {
  createProject: (project) => {
    return base
      .post("/projects/create", project)
      .then((r) => r.data)
      .catch((err) => {
        const errParsed = err.toJSON();
        return errParsed.message;
      });
  },
};
