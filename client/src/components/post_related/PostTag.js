import {UserContext} from '../context/user'
import {useContext} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

function PostTag({operatorTag, auth}){
    const params = useParams()
    const {user} = useContext(UserContext)

    return (
        <div id="operator-tag">
                <p>{}{operatorTag.operator.name}</p>
                <span>
                    <p>Level: {operatorTag.level}</p>
                    <p>Potential: {operatorTag.potential}</p>
                </span>
                {auth ? <p>meow</p> : <p>bork</p>}
        </div>
    )
}

export default PostTag