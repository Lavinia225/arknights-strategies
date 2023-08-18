import {useState, useContext} from 'react'
import {OperatorContext} from '../context/operator'

//Make sure to ensure name isn't blank before submitting
function NewOperatorForm({handleCreatingStatus}){
    const [operatorName, setOperatorName] = useState("")
    const {operators, setOperators, operatorErrors, setOperatorErrors} = useContext(OperatorContext)

    async function handleSubmit(e){
        e.preventDefault()

        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({name: operatorName})
        }

        const response = await fetch('/operators', configObject)
        const data = await response.json()

        if (response.ok){
            setOperators([...operators, data])
        }
        else{
            setOperatorErrors([...operatorErrors, data.errors])
        }

        handleCreatingStatus()
    }

    function handleChange(e){
        setOperatorName(e.target.value)
    }

    return (
        <form id='new-operator-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Name: </label>
            <input type='text' onChange={handleChange} value={operatorName}></input>
            <button type='submit'>Submit</button>
        </form> 
    )
}

export default NewOperatorForm