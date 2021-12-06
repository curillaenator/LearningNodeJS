import { Project } from "./projectType";

export interface User {
  _id: string;
  // userID: string;
  token: string;
  userName?: string;
  avatarURL?: string;
  created?: string;
  ownedProjects?: Project[];
  contributionProjects?: Project[];
}

export interface UserCreds {
  email: string;
  password: string;
}

export interface UpdateData {
  userName?: string;
}

export interface SignUpResponse {
  message: string;
  status?: string | number;
}

export interface UpdateResponse {
  user: User;
  status: string | number;
  message: string;
}

export const NullUser: User = {
  _id: "",
  // userID: "",
  token: "",
  userName: "",
  avatarURL: "",
  created: "",
  ownedProjects: [],
  contributionProjects: [],
};
