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

    if (Object.keys(post).length < 1){
        return <p>Loading...</p>
    }

    return(
        <>
            {errors.map(error => <li key={error} style={{color: 'red'}}>{error}</li>)}
            <table>
                <tbody>
                    <tr>
                        <th>{post.creator_display_name}</th>
                        <th>{post.title}</th>
                    </tr>
                    <tr>
                        {/*Operators */}
                        <td>{post.body}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )

}

export default Post