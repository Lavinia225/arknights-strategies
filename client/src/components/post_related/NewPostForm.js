import {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { UserContext } from '../context/user'

function NewPostForm(){
    const history = useHistory()
    const {user} = useContext(UserContext)
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        title: "",
        body: ""
    })

    async function handleSubmit(e){
        e.preventDefault()
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({...formData, user_id: user.id})
        }

        if (!checkFormDataForEmptyFields()) return setErrors(["No fields can be blank."])

        const response = await fetch('/posts', configObject)
        const data = await response.json()

        if (response.ok){
            history.push(`/posts/${data.id}`)
        }
        else{
            setErrors([data.errors])
        }

        function checkFormDataForEmptyFields(){
            for (const key of Object.keys(formData)){
                if (formData[key].length < 1){
                    return false
                }
            }
            return true
        }
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            {errors.length > 0 && (errors.map(error => <p key={error} style={{color: 'red'}}>{error}</p>))}
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

//Need a component to make new post operator. It needs to let you select or type out an operator name from the total operator list, as well as set their potential
//And level. So the operator id would be equal to the... operator id, and the post id will be grabbed from this component, which is the parent component.
//As the parent component, it will need to be able to have connected errors with the postoperatorform, and keep a list of the postoperators being added with itself.
//Altneratively, these could be added after the post is created and then handled on the post's individual page, so post operators can be made one at a time
//in a cleaner manner