function PostTag({operatorTag, auth, handleDeletedTag}){
    async function handleDelete(){
        if(window.confirm(`Are you sure you want to delete ${operatorTag.operator.name}'s tag?`)){
            const response = await fetch(`/post_operators/${operatorTag.id}`, {method: "DELETE"})

            handleDeletedTag(response, operatorTag.id)
        }
    }

    return (
        <div id="operator-tag">
                <p>
                    {auth ? <span onClick={handleEdit}>✎</span> : null}
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