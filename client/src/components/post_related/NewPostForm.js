import {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { UserContext } from '../context/user'

function NewPostForm(){
    const history = useHistory()
    const {user} = useContext(UserContext)
    const [formData, setFormData] = useState({
        title: "",
        body: ""
    })

    function handleSubmit(){

    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Title: </label>
                <input type='text' name='title' value={formData.title} onChange={handleChange} />
                <label htmlFor='body'>Body: </label>
                <textarea name='body' rows='20' cols='100' value={formData.body} onChange={handleChange}/>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default NewPostForm