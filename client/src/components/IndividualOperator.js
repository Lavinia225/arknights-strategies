import EditOperatorForm from "./EditOperatorForm"
import {useParams, useHistory} from 'react-router-dom'
import {useEffect, useState, useContext} from 'react'
import { OperatorContext } from "./context/operator"
import { UserContext } from "./context/user"

function IndividualOperator(){
    const params = useParams()
    const history = useHistory()
    const [editing, setEditing] = useState(false)
    const [errors, setErrors] = useState([])
    const [operator, setOperator] = useState({name: ""})
    const {operators, setOperators} = useContext(OperatorContext)
    const {user} = useContext(UserContext)

    useEffect(()=>{
        setOperator(getOperator)
        async function getOperator(){
            const response = await fetch(`/operators/${params.id}`)
            const data = await response.json()

            if(response.ok){
                setOperator(data)
            }
            else{
                setErrors([...errors, data.errors])
            }
        }
    }, [])

    function handleEditClick(){
        setEditing(true)
    }

    function handleUpdatedOperator(updatedOperator){
        setOperator(updatedOperator)
        setEditing(false)
    }

    async function handleDelete(){
        const response = await fetch(`/operators/${params.id}`, {method: 'DELETE'})

        if (response.ok){
            const updatedOperators = operators.filter(oldOperator => {
                return oldOperator.id != params.id
            })
            setOperators(updatedOperators)
            history.push('/operators')
        }
        else{
            const data = await response.json()
            setErrors([...errors, data.errors])
        }
    }
    if (user.access_level < 1){
        return <h1 style={{color: 'purple'}}>You are not authorized to be here.</h1>
    }
    
    return(
        <>
        {errors.length > 0 ? errors.map(error => <p key={error} style={{color: 'red'}}>{error}</p>) : null}
        {editing ? <EditOperatorForm operator={operator} handleUpdatedOperator={handleUpdatedOperator}/> :
            <div id='individual-operator'>
                <p>{operator.name}</p>
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        }
        </>
    )
    
}

export default IndividualOperator