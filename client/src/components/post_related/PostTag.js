import {useState} from 'react'
import EditTagForm from "./EditTagForm"

function PostTag({operatorTag, auth, handleDeletedTag, handleUpdatedTag}){
    const [editing, setEditing] = useState(false)

    async function handleDelete(){
        if(window.confirm(`Are you sure you want to delete ${operatorTag.operator.name}'s tag?`)){
            const response = await fetch(`/post_operators/${operatorTag.id}`, {method: "DELETE"})

            handleDeletedTag(response, operatorTag.id)
        }
    }

    function handleEditButtonClick(){
        setEditing(true)
    }

    function cancelEdit(){
        setEditing(false)
    }

    return (
        <div id="operator-tag">
            {!editing ? 
                <>
                    <p>
                        {auth ? <span onClick={handleEditButtonClick}>✎ </span> : null}
                        {operatorTag.operator.name}
                        {auth ? <span onClick={handleDelete}> ♻</span> : null}
                    </p>
                    <span>
                        <p>Level: {operatorTag.level}</p>
                        <p>Potential: {operatorTag.potential}</p>
                    </span>
                </>
                : <EditTagForm operatorTag={operatorTag} auth={auth} cancelEdit={cancelEdit} handleUpdatedTag={handleUpdatedTag}/>}
        </div>
    )
}

export default PostTag