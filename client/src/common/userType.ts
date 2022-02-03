import { Project } from "./projectType";

export interface User {
  userID: string;
  token: string;
  userName: string;
  avatarURL: string;
  created: string;
  ownedProjects?: Project[];
  contributionProjects?: Project[];
}

export type BasicUser = Pick<User, "userName" | "avatarURL">;

// api payloads

export interface UserCreds {
  email: string;
  password: string;
}

export interface UpdateData {
  userName: string;
  avatarURL: string;
}

// api responses

export interface SignInResponse {
  user: User;
  message: string;
  status: string | number;
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

export interface GetUserResponse {
  basicUser: BasicUser;
  status: string | number;
  message: string;
}

// default user

export const NullUser: User = {
  userID: "",
  token: "",
  userName: "",
  avatarURL: "",
  created: "",
  ownedProjects: [],
  contributionProjects: [],
};
