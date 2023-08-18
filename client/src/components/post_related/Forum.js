import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import PostPreview  from './PostPreview'

function Forum(){
    const history = useHistory()
    const [posts, setPosts] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(()=>{
        getPosts()

        async function getPosts(){
            const response = await fetch('/posts')
            const data = await response.json()

            if (response.ok){
                setPosts(data)
            }
            else{
                setErrors(data.errors)
            }
        }
    }, [])

    function handleCreatePostClick(){
        history.push('/posts/new')
    }

    return(
        <div id='forum'>
            {errors.length > 0 && (errors.map(error => <p key={error} style={{color: 'red'}}>{error}</p>))}
            <button onClick={handleCreatePostClick}>New Post</button>
            <table>
                <tbody>
                    <tr>
                        <th>Topic: </th>
                        <th>Last Activity: </th>
                    </tr>
                    {posts.map(post => <PostPreview key={post.summary} post={post}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Forum