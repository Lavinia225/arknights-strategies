import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function Post(){
    const [post, setPost] = useState({})
    const [errors, setErrors] = useState([])
    const params = useParams()

    useEffect(()=>{
        getPost()

        async function getPost(){
            const response = await fetch(`/posts/${params.id}`)
            const data = await response.json()

            if (response.ok){
                setPost(data)
            }
            else{
                setErrors(data.errors)
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

    if (Object.keys(post).length < 1){
        return <p>Loading...</p>
    }

    return(
        <>
            {errors.map(error => <li key={error} style={{color: 'red'}}>{error}</li>)}
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