import { useState, FormEvent } from "react";

import { useAppDispatch, useAppSelector, userUpdate } from "../../../redux";

import { UseProfileForm, FormState, FormHandlers } from "../interfaces";
import { UpdateData } from "../../../common";

export const useProfileForm: UseProfileForm = () => {
  const dispatch = useAppDispatch();
  const { userID, userName } = useAppSelector((state) => state.auth);

  const initialState: FormState = {
    userName,
    userId: userID,
    isIdHidden: true,
  };

  const [values, setValues] = useState<FormState>(initialState);

  const submit = (e: FormEvent) => {
    e.preventDefault();

    const data: UpdateData = {
      userName: values.userName,
    };

    dispatch(userUpdate(data));
  };

  const formHandlers: FormHandlers = {
    setUsername: (name) => setValues((prev) => ({ ...prev, userName: name })),
    setIdHidden: () => setValues((prev) => ({ ...prev, isIdHidden: false })),
  };

  return [values, formHandlers, submit];
};
