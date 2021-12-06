import axios from "axios";
import type {
  User,
  UserCreds,
  UpdateData,
  SignUpResponse,
  UpdateResponse,
} from "../common/userType";

const base = axios.create({ baseURL: "http://localhost:3300/api/" });

interface AuthAPI {
  signUp: (creds: UserCreds) => Promise<SignUpResponse | string>;
  signIn: (creds: UserCreds) => Promise<User | string>;
  update: (data: UpdateData, token: string) => Promise<UpdateResponse | string>;
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
      .catch((err) => {
        const errParsed = err.toJSON();
        return errParsed.message;
      });
  },

  update: (data, token) => {
    base.defaults.headers.common["Authorization"] = token;

    return base
      .post("auth/update", data)
      .then((r) => r.data)
      .catch((err) => {
        const errParsed = err.toJSON();
        return errParsed.message;
      });
  },
};
