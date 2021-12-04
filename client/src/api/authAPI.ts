import axios from "axios";
import type { User, UserCreds } from "../common/userType";

const base = axios.create({ baseURL: "http://localhost:3300/api/" });

interface SignUpResponse {
  message: string;
  status?: string | number;
}

interface AuthAPI {
  signUp: (creds: UserCreds) => Promise<SignUpResponse | string>;
  signIn: (creds: UserCreds) => Promise<User | string>;
}

export const authAPI: AuthAPI = {
  signUp: (creds) => {
    return base
      .post("auth/register", creds)
      .then((r) => r.data)
      .catch((err) => {
        const errParsed = err.toJSON();
        return errParsed.message;
      });
  },

  signIn: (creds) => {
    return base
      .post("auth/login", creds)
      .then((r) => r.data)
      .catch(() => "Login went wrong");
  },
};

const payload = {
  collection: "users",
  database: "TaskManager",
  dataSource: "ClusterArt",
  projection: {
    _id: 1,
  },
};
