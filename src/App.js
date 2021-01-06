import React, { Component } from "react";
import { Home, Sent } from "./pages/";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/aw">
              <Sent />
            </Route>
            <Route path="/aw/yes">
              <Home />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
