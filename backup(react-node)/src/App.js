import React from "react";
import { Route, BrowserRouter, Switch, } from "react-router-dom";
import Homescreen from "./pages/Homescreen";

import "./App.css";
import "./styles.css";
const App = () => {
  return (
    // <ScreenSyllabus />

    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Homescreen} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
//
