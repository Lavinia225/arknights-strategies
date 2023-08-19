import {useState} from 'react'

function EditPostForm({post}){
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        title: post.title,
        body: post.body,
    })

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <>
        {errors.length > 0 ? errors.map(error => <p key={error} style={{color: 'red'}}>{error}</p>) : null}
        <form>
            <label htmlFor='title'>Title: </label>
            <input type='text' name='text' onChange={handleChange} value={formData.title} />
            <label htmlFor='body'>Body: </label>
            <textarea name='body' rows='20' cols='100' onChange={handleChange} value={formData.body}/>
        </form>
        </>
    )
}

export default EditPostForm