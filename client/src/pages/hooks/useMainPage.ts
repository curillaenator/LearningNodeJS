import { useEffect } from "react";
import { useRoutes } from "./useRoutes";
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

  const { userID, isAuthModalOpen, isProfileModalOpen } = useAppSelector(
    (state) => state.auth
  );

  const routes = useRoutes(!!userID);

  useEffect(() => dispatch(initialize()), []);

  const closeAuthModal = () => dispatch(setAuthModalOpen(false));
  const closeProfileModal = () => dispatch(setProfileModalOpen(false));

  return [
    routes,
    isAuthModalOpen,
    isProfileModalOpen,
    closeAuthModal,
    closeProfileModal,
  ];
};
