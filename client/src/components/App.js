import { Switch, Route } from "react-router-dom";
import UserBar from './UserBar'
import LoginForm from './LoginForm'
import CreateAccountForm from "./CreateAccountForm";

function App() {
  
  return (
      <div className="App">
        <UserBar />
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path='/login'>
            <LoginForm />
          </Route>
          <Route path='/signup'>
            <CreateAccountForm />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
