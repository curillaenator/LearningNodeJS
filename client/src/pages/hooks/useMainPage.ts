import { useEffect } from "react";
import { useAppRoutes } from "./useAppRoutes";
import {
  useAppDispatch,
  useAppSelector,
  initialize,
  setAuthModalOpen,
  setProfileModalOpen,
} from "../../redux";

import { UseMainPage } from "./interfaces";

export const useMainPage: UseMainPage = () => {
  const dispatch = useAppDispatch();

  const { isAuthModalOpen, isProfileModalOpen } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => dispatch(initialize()), [dispatch]);

  const closeAuthModal = () => dispatch(setAuthModalOpen(false));
  const closeProfileModal = () => dispatch(setProfileModalOpen(false));

  return [
    isAuthModalOpen,
    isProfileModalOpen,
    closeAuthModal,
    closeProfileModal,
  ];
};
