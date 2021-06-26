import React, { useEffect } from 'react';

import './App.css';
import TodoFeature from './Features/Todo';
import AlbumFeature from './Features/Album';
import { Switch, Route, NavLink } from 'react-router-dom';
import productAPI from './api/productApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productAPI.getAll(params);
      console.log(productList);
    };

    fetchProducts();
  }, []);

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
