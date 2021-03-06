import axios from "axios";
import type {
  UserCreds,
  UpdateData,
  SignInResponse,
  SignUpResponse,
  UpdateResponse,
  GetUserResponse,
} from "@src/common";

const base = axios.create({ baseURL: "http://localhost:3300/api/" });

interface AuthAPI {
  signUp: (creds: UserCreds) => Promise<SignUpResponse | string>;
  signIn: (creds: UserCreds) => Promise<SignInResponse | string>;
  update: (data: UpdateData, token: string) => Promise<UpdateResponse | string>;
  getUser: (userId: string, token: string) => Promise<GetUserResponse | string>;
}

export const authAPI: AuthAPI = {
  signUp: (creds) => {
    return base
      .post("auth/register", creds)
      .then((r) => r.data)
      .catch((err) => err.response.data.message);
  },

  signIn: (creds) => {
    return base
      .post("auth/login", creds)
      .then((r) => r.data)
      .catch((err) => err.response.data.message);
  },

  update: (data, token) => {
    base.defaults.headers.common["Authorization"] = token;

    return base
      .post("auth/update", data)
      .then((r) => r.data)
      .catch((err) => err.response.data.message);
  },

  getUser: (userId, token) => {
    base.defaults.headers.common["Authorization"] = token;

    return base
      .get(`auth/getuser/${userId}`)
      .then((r) => r.data)
      .catch((err) => err.response.data.message);
  },
};
