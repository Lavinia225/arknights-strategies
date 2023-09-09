import {useState, useEffect} from 'react'
import { Switch, Route } from "react-router-dom";
import UserBar from './user_related/UserBar'
import LoginForm from './user_related/LoginForm'
import CreateAccountForm from "./user_related/CreateAccountForm";
import NavBar from "./NavBar";
import Forum from './post_related/Forum'
import Post from './post_related/Post'
import NewPostForm from './post_related/NewPostForm'
import Operators from './operator_related/Operators'
import IndividualOperator from "./operator_related/IndividualOperator";
import Home from './Home'

function App() {
  const [operators, setOperators] = useState([])
  const [operatorErrors, setOperatorErrors] = useState([])

  useEffect(()=>{
    getOperators()

    async function getOperators(){
      const response = await fetch('/operators')
      const data = await response.json()

      if (response.ok){
        setOperators(data)
      }
      else{
        setOperatorErrors(data.errors)
      }
    }
  }, [])

  return (
      <div className="App">
        <UserBar />
        <NavBar />
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
            <Post operators={operators}/>
          </Route>
          <Route path='/operators/:id'> {/*Test if App can access params to pass the correct operator by themselves down */}
            <IndividualOperator />
          </Route>
          <Route path='/operators'>
              <Operators operators={operators}/>
          </Route>
        </Switch>
      </div>
  );
}

export default App;
