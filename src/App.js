import "./App.css";
import TodoFeature from "./Features/Todo";
import AlbumFeature from "./Features/Album";
import { Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <NavLink to="/todolist">TodoList</NavLink>
      <br />
      <NavLink to="/album">Album</NavLink>
      <Switch>
        <Route path="/todolist" component={TodoFeature} />
        <Route path="/album" component={AlbumFeature} />
      </Switch>
    </div>
  );
}

export default App;
