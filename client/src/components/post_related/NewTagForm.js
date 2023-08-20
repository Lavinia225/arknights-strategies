import {useContext, useState} from 'react'
import {OperatorContext} from '../context/operator'

function NewTagForm({auth, stopCreating}){
    const {operators} = useContext(OperatorContext)
    const [select, setSelect] = useState({})
    const [formData, setFormData] = useState({
        level: "E0-0",
        potential: 0,
        operator_id: operators[0].id
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

    function cancelCreating(){
        stopCreating()
    }

    if (auth === false){
        return <p style={{color: 'red'}}>You are not authorized to create tags for this post.</p>
    }
    console.log(formData)
    return(
        <div>
            <form>
                <select onChange={handleSelect} value={select}>
                    {operators.map(operator => <option key={operator.name}>{operator.name}</option>)}
                </select>
                <label htmlFor='level'>Level: </label>
                <input type='text' name='level' value={formData.level} onChange={handleChange} />
                <label htmlFor='potential'>Potential: </label>
                <input type='number' name='potential' value={formData.potential} onChange={handleChange} />
            </form>
            <button onClick={cancelCreating}>Cancel</button>
        </div>
    )
}

export default NewTagForm