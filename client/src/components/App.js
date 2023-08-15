import { Switch, Route } from "react-router-dom";
import UserBar from './UserBar'
import LoginForm from './LoginForm'
import CreateAccountForm from "./CreateAccountForm";
import NavBar from "./NavBar";
import Forum from './Forum'

function App() {
  
  return (
      <div className="App">
        <UserBar />
        <NavBar />
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path='/login'>
            <LoginForm />
          </Route>
          <Route path='/signup'>
            <CreateAccountForm />
          </Route>
          <Route path='/posts'>
            <Forum />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
