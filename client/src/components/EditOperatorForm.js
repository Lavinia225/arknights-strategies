import {useState} from 'react'

function EditOperatorForm({operator}){
    const [formData, setFormData] = useState({name: operator.name})

    async function handleSubmit(){
        const configObject = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }

        const response = await fetch(`operators/${operator.id}`, configObject)
        const data = await response.json()

        if (response.ok){
            //find the operator in operators with the correct id, replace them, and then put the newly mapped array as the new operators array
        }
        else{
            //Add an error that is specific to this component and render that error above the form
        }
    }

    function handleChange(e){
        setFormData(e.target.value)
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

//This file is untested