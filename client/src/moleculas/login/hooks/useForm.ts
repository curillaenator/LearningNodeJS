import { useState, FormEvent } from "react";
import { FormErrors, UseFormHook } from "../interfaces";

import { useHttpRequest } from "../../../hooks/useHttpRequest";

export const useForm: UseFormHook = (close) => {
  const [request, loading, error, clearErrors] = useHttpRequest();

  console.log(loading, error);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isReg, setIsReg] = useState(false);

  const handleRegister = (reg: boolean) => {
    setErrors({});
    setIsReg(reg);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!email.trim()) {
      setErrors((prev) => ({ ...prev, email: "Required field" }));
    }

    if (!password.trim()) {
      setErrors((prev) => ({ ...prev, password: "Required field" }));
    }

    if (!email.trim() || !password.trim()) return;

    if (isReg) {
      const data = await request(
        "http://localhost:3300/api/auth/register",
        "POST",
        { email: email.trim(), password: password.trim() }
      );
      console.log(data);
    }

    if (!isReg) {
      const data = await request("http://localhost:3300/api/auth/login");
      console.log(data);
    }

    close();
  };

  const getDescription = (field: "email" | "password") => {
    if (field === "email") {
      if (errors.email) return errors.email;
      if (isReg) return "Enter your valid email";
    }

    if (field === "password") {
      if (errors.password) return errors.password;
      if (isReg) return "Min 8 symbols";
    }

    return "";
  };

  return [
    isReg,
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
