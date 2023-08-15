function PostPreview({post}){

    function renderTags(){

    }

    <div id='post-preview'>
        <h4>{post.title}</h4>
        {post.tags.map(renderTags)}
        <p>{post.summary}</p>
    </div>
}

export default PostPreview

/*
 "post_operators": [
            {
                "id": 1,
                "potential": 6,
                "level": "5",
                "operator": {
                    "id": 1,
                    "name": "Goldenglow"
                }
                */