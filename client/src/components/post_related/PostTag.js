

function PostTag({operatorTag}){
    return (
        <div id="operator-tag">
                <p>{operatorTag.operator.name}</p>
                <span>
                    <p>Level: {operatorTag.level}</p>
                    <p>Potential: {operatorTag.potential}</p>
                </span>
        </div>
    )
}

export default PostTag