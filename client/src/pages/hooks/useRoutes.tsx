import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { ProjectsPage } from "../ProjectsPage";
import { WelcomePage } from "../WelcomePage";

import { UseRoutesHook } from "./interfaces";

export const useRoutes: UseRoutesHook = (isUserAuthed) => {
  if (isUserAuthed)
    return (
      <Switch>
        <Route path="/projects" render={() => <ProjectsPage />} />
        <Redirect to="/projects" />
      </Switch>
    );

  return (
    <Switch>
      <Route path="/welcome" render={() => <WelcomePage />} />
      <Redirect to="/welcome" />
    </Switch>
  );
};
