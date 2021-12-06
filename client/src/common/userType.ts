import { Project } from "./projectType";

export interface User {
  userID: string;
  token: string;
  name?: string;
  avatarURL?: string;
  created?: string;
  ownedProjects?: Project[];
  contributionProjects?: Project[];
}

export interface UserCreds {
  email: string;
  password: string;
}

export const NullUser: User = {
  userID: "",
  token: "",
  name: "",
  avatarURL: "",
  created: "",
  ownedProjects: [],
  contributionProjects: [],
};
