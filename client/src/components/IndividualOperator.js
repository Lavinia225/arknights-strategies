import EditOperatorForm from "./EditOperatorForm"
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

function IndividualOperator(){
    const params = useParams()
    const [editing, setEditing] = useState(false)
    const [errors, setErrors] = useState([])
    const [operator, setOperator] = useState({name: ""})

    useEffect(()=>{
        setOperator(getOperator)
        async function getOperator(){
            const response = await fetch(`/operators/${params.id}`)
            const data = await response.json()

            if(response.ok){
                setOperator(data)
            }
            else{
                setErrors(data.errors)
            }
        }
    }, [])

    function handleEditClick(){
        setEditing(true)
    }

    return(
        <>
        {errors.length > 0 ? errors.map(error => <p key={error} style={{color: 'red'}}>{error}</p>) : null}
        {editing ? <EditOperatorForm operator={operator} /> :
            <div id='individual-operator'>
                <p>{operator.name}</p>
                <button onClick={handleEditClick}>Edit</button>
            </div>
        }
        </>
    )
    
}

export default IndividualOperator