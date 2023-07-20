import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/">
            <h1>Currently building! Don't mind the void!</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
