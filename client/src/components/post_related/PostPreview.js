import {useHistory} from 'react-router-dom'

function PostPreview({post}){
    const history = useHistory()

    function handleClick(){
        history.push(`/posts/${post.id}`)
    }

    return(
        <tr id='post-preview'>
            <td onClick={handleClick}>
                <div id="post-preview-dateless">
                <h3>{post.title}</h3>
                {post.operators.map(operator => <p id='operator-tag' key={`${post.title} + ${operator.id} + ${Math.random()}`}>{operator.name}</p>)}
                <p id='post-summary'>{post.summary}</p>
                </div>
            </td>
            <td>
                <p id='post-updated-at'>{post.updated_at_formatted}</p>
            </td>
        </tr>
    )
}

export default PostPreview