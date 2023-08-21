function PostTag({operatorTag, auth, handleDeletedTag}){
    async function handleDelete(){
        const response = await fetch(`/post_operators/${operatorTag.id}`, {method: "DELETE"})
        
        handleDeletedTag(response, operatorTag.id)
    }

    return (
        <div id="operator-tag">
                <p>
                    {auth ? <span>✎</span> : null}
                    {operatorTag.operator.name}
                    {auth ? <span onClick={handleDelete}>Delete icon</span> : null}
                </p>
                <span>
                    <p>Level: {operatorTag.level}</p>
                    <p>Potential: {operatorTag.potential}</p>
                </span>
        </div>
    )
}

export default PostTag