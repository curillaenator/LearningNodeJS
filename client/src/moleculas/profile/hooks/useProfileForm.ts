import { useState, FormEvent } from "react";

import { useAppDispatch, useAppSelector, userUpdate } from "../../../redux";

import { UseProfileForm, FormState, FormHandlers } from "../interfaces";
import { UpdateData } from "../../../common";

export const useProfileForm: UseProfileForm = () => {
  const dispatch = useAppDispatch();
  const { userID, userName, avatarURL } = useAppSelector((state) => state.auth);

  const [values, setValues] = useState<FormState>({
    userName,
    avatarURL,
    userId: userID,
    isIdHidden: true,
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();

    const data: UpdateData = {
      userName: values.userName,
      avatarURL: values.avatarURL,
    };

    dispatch(userUpdate(data));
  };

  const formHandlers: FormHandlers = {
    setIdHidden: () => setValues((prev) => ({ ...prev, isIdHidden: false })),
    setUsername: (name) => setValues((prev) => ({ ...prev, userName: name })),
    setAvatarURL: (url) => setValues((prev) => ({ ...prev, avatarURL: url })),
  };

  return [values, formHandlers, submit];
};
