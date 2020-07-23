import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>

          <Route exact path='/..pathname..'></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
