import { Switch, Route } from "react-router-dom";
import UserBar from './user_related/UserBar'
import LoginForm from './user_related/LoginForm'
import CreateAccountForm from "./user_related/CreateAccountForm";
import NavBar from "./NavBar";
import Forum from './post_related/Forum'
import Post from './post_related/Post'
import NewPostForm from './post_related/NewPostForm'
import Operators from './operator_related/Operators'
import {OperatorProvider} from './context/operator'
import IndividualOperator from "./operator_related/IndividualOperator";
import Home from './Home'

function App() {

  return (
      <div className="App">
        <UserBar />
        <NavBar />
        <OperatorProvider>
          <Switch>
            <Route exact path="/">
              <Home />
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
            <Route path='/posts/new'>
              <NewPostForm />
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
