import { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "./context/user";
import UserBar from './UserBar'

function App() {
  const {user, setUser} = useContext(UserContext)

  return (
      <div className="App">
        <UserBar />
        <Switch>
          <Route exact path="/">
          </Route>
        </Switch>
      </div>
  );
}

export default App;
