import React from "react";
// import "./style.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import TodoList from "./Components/todoList";
import TodoDetail from "./Pages/todoDetail";
import NotFound from "./Components/notFound";
function TodoFeature() {
  const match = useRouteMatch();
  return (
    <>
      <h2>Todo</h2>
      <Switch>
        <Route path={match.path} component={TodoList} exact/>
        <Route path={`${match.path}/:todoId`} exact component={TodoDetail} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default TodoFeature

