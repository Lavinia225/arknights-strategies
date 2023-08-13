import { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "./context/user";
import UserBar from './UserBar'
import LoginForm from './LoginForm'

function App() {
  
  return (
      <div className="App">
        <UserBar />
        <Switch>
          <Route exact path="/">
          </Route>
          <Route>
            <LoginForm />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
