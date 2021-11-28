import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { TaskPage } from "../TasksPage";
import { WelcomePage } from "../WelcomePage";

import { UseRoutesHook } from "./interfaces";

export const useRoutes: UseRoutesHook = (isUserAuthed) => {
  if (isUserAuthed)
    return (
      <Switch>
        <Route path="/tasks" render={() => <TaskPage />} />
        <Redirect to="/tasks" />
      </Switch>
    );

  return (
    <Switch>
      <Route path="/welcome" render={() => <WelcomePage />} />
      <Redirect to="/welcome" />
    </Switch>
  );
};
