import {useState} from 'react'

function NewTagForm({auth}){
    const [formData, setFormData] = useState({
        level: "E0-0",
        potential: 0,
        operator_id: 0
    })

    function handleChange(e){
        setFormData({[e.target.name]: e.target.value})
    }

    if (auth === false){
        return <p style={{color: 'red'}}>You are not authorized to create tags for this post.</p>
    }

    return(
        <form>
            <label htmlFor='level'>Level: </label>
            <input type='text' name='level' value={formData.level} onChange={handleChange} />
            <label htmlFor='potential'>Potential: </label>
            <input type='number' name='potential' value={formData.potential} onChange={handleChange} />
        </form>
    )
}

export default NewTagForm