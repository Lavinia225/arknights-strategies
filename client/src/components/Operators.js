import {useContext} from 'react'
import { OperatorContext } from "./context/operator"

function Operators(){
    const {operators, operatorErrors} = useContext(OperatorContext)

    function renderOperators(operator){
        return <li key={`${operator.id} + ${operator.name}`}>{operator.name}</li>
    }

    return (
        <ul>
            {operatorErrors.length > 0 ? operatorErrors.map(error => <li key={error} style={{color: 'red'}}>{error}</li>): null}
            {operators.length > 0 ? operators.map(renderOperators) : null}
        </ul>
    )
}

export default Operators