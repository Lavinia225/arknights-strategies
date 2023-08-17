import {useState, useContext} from 'react'
import { OperatorContext } from './context/operator'

//This file is untested
function EditOperatorForm({operator}){
    const [formData, setFormData] = useState({name: operator.name})
    const [errors, setErrors] = useState([])
    const {operators, setOperators} = useContext(OperatorContext)

    async function handleSubmit(e){
        e.preventDefault()

        const configObject = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }

        const response = await fetch(`/operators/${operator.id}`, configObject)
        const data = await response.json()

        if (response.ok){
            const updatedOperators = operators.map(findAndReplaceUpdatedOperator)
            setOperators(updatedOperators)
        }
        else{
            setErrors([...errors, data.errors])
        }

        function findAndReplaceUpdatedOperator(oldOperator){
            if (oldOperator.id === operator.id){
                return data
            }
            else{
                return oldOperator
            }
        }
    }

    function handleChange(e){
        setFormData({name: e.target.value})
    }

    return(
        <>
            {errors.length > 0 ? errors.map(error => <p key={error} style={{color: 'red'}}>{error}</p>) : null}
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input type='text' onChange={handleChange} value={formData.name}></input>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default EditOperatorForm