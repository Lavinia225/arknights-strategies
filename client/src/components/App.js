import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import GridTransition from "./GridTransition";

function App() {

  return (
      <div className="App">
        <Switch>
          <Route path="/">
            <GridTransition />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
