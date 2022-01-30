import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { useAppSelector } from "../redux";

import { PageLayout, WelcomePage, ProjectsPage } from "./components";

export const MainPage: FC = () => {
  const { userID } = useAppSelector((state) => state.auth);

  if (!userID) {
    return (
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="*" element={<WelcomePage />} />
        </Route>
      </Routes>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<ProjectsPage />} />
          <Route path=":projectId" element={<ProjectsPage />} />
          <Route path="*" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </>
  );
};
