import {useState} from 'react'


//Make sure to ensure name isn't blank before submitting
function NewOperatorForm({handleCreatingStatus, handleNewOperator}){
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

        handleNewOperator(response, data)
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