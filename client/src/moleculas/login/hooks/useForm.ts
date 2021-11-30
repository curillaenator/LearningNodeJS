import { useState, useEffect, FormEvent } from "react";
import { FormErrors, UseFormHook } from "../interfaces";

import { useAppDispatch, useAppSelector } from "../../../redux";

import { userSignIn, userSignUp } from "../../../redux";

// import { useHttpRequest } from "../../../hooks/useHttpRequest";

export const useForm: UseFormHook = (close) => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.auth);

  // const [request, loading, error, clearErrors] = useHttpRequest();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    if (error) setErrors({ server: error });
  }, [error]);

  const handleRegister = (reg: boolean) => {
    setErrors({});
    setIsRegister(reg);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!email.trim()) {
      setErrors((prev) => ({ ...prev, email: "Required field" }));
    }

    if (!password.trim()) {
      setErrors((prev) => ({ ...prev, password: "Required field" }));
    }

    if (!email.trim() || !password.trim()) return;

    if (isRegister) {
      const creds = {
        email: email.trim(),
        password: password.trim(),
      };

      // const data = await request("auth/register", "POST", creds);

      dispatch(userSignUp(creds));
    }

    if (!isRegister) {
      // const data = await request("auth/login", "POST", { email, password });

      dispatch(userSignIn({ email, password }));
    }

    // console.log(errors);

    // close();
  };

  const getDescription = (field: "email" | "password") => {
    if (field === "email") {
      if (errors.email) return errors.email;
      if (isRegister) return "Enter your valid email";
    }

    if (field === "password") {
      if (errors.password) return errors.password;
      if (isRegister) return "Min 8 symbols";
    }

    return "";
  };

  return [
    isRegister,
    handleRegister,
    email,
    (emailValue: string) => setEmail(emailValue),
    password,
    (passwordValue: string) => setPassword(passwordValue),
    errors,
    onSubmit,
    getDescription,
  ];
};
