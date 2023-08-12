import { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import GridTransition from "./GridTransition";
import { UserContext } from "./context/user";

function App() {
  const {user, setUser} = useContext(UserContext)

  return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <GridTransition />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
