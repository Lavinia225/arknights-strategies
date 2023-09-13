import {useState, useEffect} from 'react'
import { Switch, Route, useHistory } from "react-router-dom";
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
  const history = useHistory()
  const [operators, setOperators] = useState([])
  const [operatorErrors, setOperatorErrors] = useState([])

  useEffect(()=>{
    getOperators()

  }, [])

  async function getOperators(){
    const response = await fetch('/operators')
    const data = await response.json()

    if (response.ok){
      setOperators(data)
      setOperatorErrors([])
    }
    else{
      setOperatorErrors(data.errors)
    }
  }

  function handleNewOperator(response, data){
    if (response.ok){
      setOperators([...operators, data])
    }
    else{
      setOperatorErrors([...operatorErrors, data.errors])
    }
  }

  async function handleDeletingOperator(id){
    const response = await fetch(`/operators/${id}`, {method: 'DELETE'})

        if (response.ok){
            const updatedOperators = operators.filter(oldOperator => {
                return oldOperator.id != id
            })
            setOperators(updatedOperators)
            history.push('/operators')
        }
        else{
            const data = await response.json()
            setOperatorErrors([...operatorErrors, data.errors])
        }
}

function handleUpdatedOperator(operator){
  const updatedOperators = operators.map(findAndReplaceUpdatedOperator)
  setOperators(updatedOperators)

  function findAndReplaceUpdatedOperator(oldOperator){
    if (oldOperator.id === operator.id){
        return operator
    }
    else{
        return oldOperator
    }
  }
}

function verifyOperators(){
  if(operators.length < 1){
    getOperators()
  }
}

  return (
      <div className="App">
        <UserBar />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/login'>
            <LoginForm verifyOperators={verifyOperators}/>
          </Route>
          <Route path='/signup'>
            <CreateAccountForm verifyOperators={verifyOperators}/>
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
            <IndividualOperator operators={operators} handleDelete={handleDeletingOperator} handleUpdatedOperator={handleUpdatedOperator}/>
          </Route>
          <Route path='/operators'>
              <Operators operators={operators} operatorErrors={operatorErrors} handleNewOperator={handleNewOperator}/>
          </Route>
        </Switch>
      </div>
  );
}

export default App;
