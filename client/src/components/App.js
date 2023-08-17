import { Switch, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import UserBar from './UserBar'
import LoginForm from './LoginForm'
import CreateAccountForm from "./CreateAccountForm";
import NavBar from "./NavBar";
import Forum from './Forum'
import Post from './Post'
import Operators from './Operators'
import IndividualOperator from "./IndividualOperator";

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
    
    function handleNewOperator(newOperator){
      setOperators([...operators, newOperator])
    }

    function handleNewOperatorErrors(error){
      setOperatorErrors([operatorErrors, error])
    }

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
            <Route exact path='/posts'>
                <Forum />
            </Route>
            <Route path='/posts/:id'>
              <Post />
            </Route>
            <Route path='/operators/:id'>
              <IndividualOperator operators={operators} operatorErrors={operatorErrors}/> {/* Handle Edit Operator*/}
            </Route>
            <Route path='/operators'>
                <Operators operators={operators} operatorErrors={operatorErrors} handleNewOperatorErrors={handleNewOperatorErrors} handleNewOperator={handleNewOperator}/>
            </Route>
          </Switch>
      </div>
  );
}

export default App;
