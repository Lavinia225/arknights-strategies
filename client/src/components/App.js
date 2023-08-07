import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

function App() {

  return (
      <div className="App">
        <Switch>
          <Route path="/">
            <h1>Currently building! Don't mind the void!</h1>
          </Route>
        </Switch>
      </div>
  );
}

export default App;
