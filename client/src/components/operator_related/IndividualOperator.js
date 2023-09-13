import EditOperatorForm from "./EditOperatorForm"
import {useParams} from 'react-router-dom'
import {useEffect, useState, useContext} from 'react'
import { UserContext } from "../context/user"

function IndividualOperator({operators, handleDelete, handleUpdatedOperator}){
    const params = useParams()
    const [editing, setEditing] = useState(false)
    const [operator, setOperator] = useState({name: ""})
    const {user} = useContext(UserContext)

    useEffect(()=>{
        const currentOperator = operators.find(({id}) => id == params.id)
        setOperator(currentOperator)
    }, [])

    function handleEditClick(){
        setEditing(true)
    }

    function handlePassingUpdatedOperator(updatedOperator){
        handleUpdatedOperator(updatedOperator)
        setOperator(updatedOperator)
        setEditing(false)
    }

    if (user.access_level < 1){
        return <h1 style={{color: 'purple'}}>You are not authorized to be here.</h1>
    }
    
    return(
        <>
        {editing ? <EditOperatorForm operator={operator} handlePassingUpdatedOperator={handlePassingUpdatedOperator}/> :
            <div id='individual-operator'>
                <p>{operator.name}</p>
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={()=>handleDelete(params.id)}>Delete</button>
            </div>
        }
        </>
    )
    
}

export default IndividualOperator