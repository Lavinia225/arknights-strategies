import {useState} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

function EditTagForm({operatorTag, cancelEdit, handleUpdatedTag, operators}){
    const params = useParams()
    const [select, setSelect] = useState(operatorTag.operator.name)
    const [formData, setFormData] = useState({
        level: operatorTag.level,
        potential: operatorTag.potential,
        operator_id: operatorTag.operator,
        post_id: params.id
    })

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSelect(e){
        setSelect(e.target.value)
        setFormData({...formData, operator_id: findOperatorId(e.target.value)})

        function findOperatorId(name){
            return operators.find(operator => operator.name === name).id
        }
    }

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

        const response = await fetch(`/post_operators/${operatorTag.id}`, configObject)
        const data = await response.json()

        handleUpdatedTag(response, data)
        cancelEdit()
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <select onChange={handleSelect} value={select}>
                    {operators.map(operator => <option key={operator.name}>{operator.name}</option>)}
                </select>
                <label htmlFor='level'>Level: </label>
                <input type='text' name='level' value={formData.level} onChange={handleChange} />
                <label htmlFor='potential'>Potential: </label>
                <input type='number' name='potential' value={formData.potential} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
            <button onClick={cancelEdit}>Cancel</button>
        </div>
    )
}

export default EditTagForm

