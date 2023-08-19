import {useState, useEffect, useContext} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {UserContext} from '../context/user'

function Post(){
    const params = useParams()
    const history = useHistory()
    const {user} = useContext(UserContext)
    const [post, setPost] = useState({})
    const [errors, setErrors] = useState([])

    useEffect(()=>{
        getPost()

        async function getPost(){
            const response = await fetch(`/posts/${params.id}`)
            const data = await response.json()

            if (response.ok){
                setPost(data)
            }
            else{
                setErrors([data.errors])
            }
        }
    }, [])

    function renderOperatorTags(operatorTag){
        return (
            <div key={operatorTag.operator.name} id="operator-tag">
                <p>{operatorTag.operator.name}</p>
                <span>
                    <p>Level: {operatorTag.level}</p>
                    <p>Potential: {operatorTag.potential}</p>
                </span>
            </div>
        )
    }

    async function handleDelete(){
        const confirmation = window.confirm("Are you sure you want to delete this post and the associated operator tags?")

        if (confirmation){
            const response = await fetch(`/posts/${post.id}`, {method: 'DELETE'})
            
            if (response.ok){
                history.push('/posts')
            }
            else{
                const data = await response.json()
                setErrors([data.errors])
            }
        }
    }

    if (Object.keys(post).length < 1){
        return <p>Loading...</p>
    }

    return(
        <>
            {errors.map(error => <li key={error} style={{color: 'red'}}>{error}</li>)}
            {user.id === post.user_id ? <div id='post-edit-delete-buttons'>
                <button>Edit (Useless)</button>
                <button onClick={handleDelete}>Delete</button>
            </div> : null}
            <table id='post'>
                <tbody>
                    <tr>
                        <th>{post.creator_display_name}</th>
                        <th>{post.title}</th>
                    </tr>
                    <tr>
                        <td id='tag-container'>
                                {post.post_operators.map(renderOperatorTags)}
                        </td>
                        <td>{post.body}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )

}

export default Post