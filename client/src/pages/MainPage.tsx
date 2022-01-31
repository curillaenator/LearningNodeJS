import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Pathes } from "@src/routes";

import { useAppSelector } from "@src/redux";

import { PageLayout, WelcomePage, ProjectsPage, TaskPage } from "./components";

export const MainPage: FC = () => {
  const { userID } = useAppSelector((state) => state.auth);

  if (!userID) {
    return (
      <Routes>
        <Route path={Pathes.root} element={<PageLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path={Pathes.any} element={<WelcomePage />} />
        </Route>
      </Routes>
    );
  }

  return (
    <>
      <Routes>
        <Route path={Pathes.root} element={<PageLayout />}>
          <Route index element={<ProjectsPage />} />
          <Route path={Pathes.project} element={<ProjectsPage />} />
          <Route path={Pathes.task} element={<TaskPage />} />
          <Route path={Pathes.any} element={<ProjectsPage />} />
        </Route>
      </Routes>
    </>
  );
};
