import {useContext, useState} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import {OperatorContext} from '../context/operator'

function NewTagForm({auth, stopCreating, handleNewTag}){
    const params = useParams()
    const {operators} = useContext(OperatorContext)
    const [select, setSelect] = useState({})
    const [formData, setFormData] = useState({
        level: "E0-0",
        potential: 0,
        operator_id: operators[0].id,
        post_id: params.id
    })

    async function handleSubmit(e){
        e.preventDefault()
        const configObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }
        
        const response = await fetch('/post_operators', configObject)
        const data = await response.json()

        handleNewTag(response, data)
    }

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

    function cancelCreating(){
        stopCreating()
    }

    if (auth === false){
        return <p style={{color: 'red'}}>You are not authorized to create tags for this post.</p>
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
            <button onClick={cancelCreating}>Cancel</button>
        </div>
    )
}

export default NewTagForm