import {useState} from 'react'

function EditPostForm({post, handleUpdatedPost}){
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

        const response = await fetch(`/posts/${post.id}`, configObject)
        const data = await response.json()

        if (response.ok){
            handleUpdatedPost(data)
        }
        else{
            setErrors([data.errors])
        }
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div id='edit-post'>
        {errors.length > 0 ? errors.map(error => <p key={error} style={{color: 'red'}}>{error}</p>) : null}
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title: </label>
            <input type='text' name='title' onChange={handleChange} value={formData.title} />
            <label htmlFor='body'>Body: </label>
            <textarea name='body' rows='20' cols='100' onChange={handleChange} value={formData.body}/>
            <button type='submit'>Submit</button>
        </form>
        </div>
    )
}

export default EditPostForm