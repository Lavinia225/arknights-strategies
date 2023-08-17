import {useContext} from 'react'
import { OperatorContext } from "./context/operator"
import {UserContext} from './context/user'

function Operators(){
    const {operators, operatorErrors} = useContext(OperatorContext)
    const {user} = useContext(UserContext)

    function renderOperators(operator){
        return <li key={`${operator.id} + ${operator.name}`}>{operator.name}</li>
    }

    if (user.access_level < 1){
        return <h1 style={{color: 'purple'}}>You are not authorized to be here.</h1>
    }
    else{
        return (
            <ul>
                {operatorErrors.length > 0 ? operatorErrors.map(error => <li key={error} style={{color: 'red'}}>{error}</li>): null}
                {operators.length > 0 ? operators.map(renderOperators) : null}
            </ul>
        )
    }
}

export default Operators