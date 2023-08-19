import {useState} from 'react'

function EditPostForm({post}){
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        title: post.title,
        body: post.body,
    })

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

        const response = await fetch(`/posts/${post.id}`)
        const data = await response.json()

        if (response.ok){
            //call the function provided by Post to update the post in stage and cancel edit state
        }
        else{
            setErrors([data.errors])
        }
    }
    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <>
        {errors.length > 0 ? errors.map(error => <p key={error} style={{color: 'red'}}>{error}</p>) : null}
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title: </label>
            <input type='text' name='text' onChange={handleChange} value={formData.title} />
            <label htmlFor='body'>Body: </label>
            <textarea name='body' rows='20' cols='100' onChange={handleChange} value={formData.body}/>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}

export default EditPostForm