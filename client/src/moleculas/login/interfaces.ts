interface Credentials {
  email: string;
  password: string;
}

export interface LoginProps {
  submit: (credentials: Credentials) => void;
  close: () => void;
}
