import React from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/category" component={CategoryPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
