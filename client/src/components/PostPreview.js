function PostPreview({post}){
    return(
        <tr id='post-preview'>
            <td>
                <div id="post-preview-dateless">
                <h3>{post.title}</h3>
                {post.operators.map(operator => <p id='operator-tag' key={`${post.title} + ${operator.id}`}>{operator.name}</p>)}
                <p id='post-summary'>{post.summary}</p>
                </div>
            </td>
            <td>
                <p id='post-updated-at'>{post.updated_at}</p>
            </td>
        </tr>
    )
}

export default PostPreview