import {useState, useEffect, useContext} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {UserContext} from '../context/user'
import EditPostForm from './EditPostForm'
import PostTag from './PostTag'
import NewTagForm from './NewTagForm'

function Post(){
    const params = useParams()
    const history = useHistory()
    const {user} = useContext(UserContext)
    const [editing, setEditing] = useState(false)
    const [creatingTag, setCreatingTag] = useState(false)
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

    async function handleDeletePost(){
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

    function handleNewTag(response, data){
        if (response.ok){
            const updatedTags = [...post.post_operators, data]
            setPost({...post, post_operators: updatedTags})
        }
        else{
            setErrors([data.errors])
        }
        setCreatingTag(false)
    }

    function handleUpdatedPost(updatedPost){
        setEditing(false)
        setPost(updatedPost)
    }

    async function handleDeletedTag(response, deletedId){
        if (response.ok){
            const updatedTags = [...post.post_operators.filter(tag => tag.id !== deletedId )]
            setPost({...post, post_operators: updatedTags})
        }
        else{
            const data = response.json()
            setErrors([data.errors])
        }
    }

    function handleEditPostClick(){
        setEditing(!editing)
    }

    function handleCreateTagButton(){
        setCreatingTag(!creatingTag)
    }

    if (Object.keys(post).length < 1){
        return <p>Loading...</p>
    }

    return(
        <>
            {errors.map(error => <li key={error} style={{color: 'red'}}>{error}</li>)}
            {user.id === post.user_id ? <div id='post-edit-delete-buttons'>
                <button onClick={handleEditPostClick}>{editing ? 'Cancel Editing' : 'Edit'}</button>
                <button onClick={handleDeletePost}>Delete</button>
            </div> : null}
            {editing ? <EditPostForm post={post} handleUpdatedPost={handleUpdatedPost}/> :
            <table id='post'>
                <tbody>
                    <tr>
                        <th>{post.creator_display_name}</th>
                        <th>{post.title}</th>
                    </tr>
                    <tr>
                        <td id='tag-container'>
                            {creatingTag ? <NewTagForm auth={user.id === post.user_id} stopCreating={handleCreateTagButton} handleNewTag={handleNewTag}/>
                            : <button onClick={handleCreateTagButton}>Create Tag</button>}
                            {post.post_operators.map(tag => <PostTag key={tag.operator.name} operatorTag={tag} auth={user.id === post.user_id} handleDeletedTag={handleDeletedTag}/>)}
                        </td>
                        <td>{post.body}</td>
                    </tr>
                </tbody>
            </table>
            }
        </>
    )

}

export default Post