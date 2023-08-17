import {useState, useContext} from 'react'

function NewOperatorForm({handleCreatingStatus, handleNewOperator, handleNewOperatorErrors}){
    const [operatorName, setOperatorName] = useState("")

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
            handleNewOperator(data)
        }
        else{
            handleNewOperatorErrors(data.errors)
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