import { Switch, Route } from "react-router-dom";
import UserBar from './UserBar'
import LoginForm from './LoginForm'
import CreateAccountForm from "./CreateAccountForm";
import NavBar from "./NavBar";
import Forum from './Forum'
import Post from './Post'
import Operators from './Operators'
import {OperatorProvider} from './context/operator'
import IndividualOperator from "./IndividualOperator";

function App() {

  return (
      <div className="App">
        <UserBar />
        <NavBar />
        <OperatorProvider>
          <Switch>
            <Route exact path="/">
            </Route>
            <Route path='/login'>
              <LoginForm />
            </Route>
            <Route path='/signup'>
              <CreateAccountForm />
            </Route>
            <Route exact path='/posts'>
                <Forum />
            </Route>
            <Route path='/posts/:id'>
              <Post />
            </Route>
            <Route path='/operators/:id'>
              <IndividualOperator />
            </Route>
            <Route path='/operators'>
                <Operators />
            </Route>
          </Switch>
        </OperatorProvider>
      </div>
  );
}

export default App;
