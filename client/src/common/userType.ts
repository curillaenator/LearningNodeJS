export interface User {
  userID: string;
  token: string;
  name?: string;
  avatarURL?: string;
  // lastProjectId?: string;
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
};
