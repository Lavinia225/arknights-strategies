import {useContext, useState} from 'react'
import {UserContext} from '../context/user'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import NewOperatorForm from './NewOperatorForm'

function Operators({operators, operatorErrors, handleNewOperator}){
    const [isCreating, setIsCreating] = useState(false)
    const {user} = useContext(UserContext)
    const history = useHistory()

    function renderOperators(operator){
        return <li key={`${operator.id} + ${operator.name}`} onClick={()=>handleClick(operator.id)}>{operator.name}</li>
    }

    function handleClick(id){
        history.push(`/operators/${id}`)
    }

    function handleCreatingStatus(){
        setIsCreating(false)
    }

    if (user.access_level < 1){
        return <h1 style={{color: 'purple'}}>You are not authorized to be here.</h1>
    }

    else{
        return (
            <>
                <div id='create-new-operator'>
                    {isCreating ? <NewOperatorForm handleCreatingStatus={handleCreatingStatus} handleNewOperator={handleNewOperator}/> :
                    <button onClick={()=>setIsCreating(true)}>New Operator</button>}
                </div>
                <ul id='operator-list'>
                    {operatorErrors.length > 0 ? operatorErrors.map(error => <li key={error} style={{color: 'red'}}>{error}</li>): null}
                    {operators.length > 0 ? operators.map(renderOperators) : null}
                </ul>
            </>
        )
    }
}

export default Operators