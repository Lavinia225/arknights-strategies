import {useState, useEffect} from 'react'

function Forum(){
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
console.log(posts)
    return(
        <></>
    )
}

export default Forum