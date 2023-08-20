import {UserContext} from '../context/user'
import {useContext} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

function PostTag({operatorTag, auth}){
    const params = useParams()
    const {user} = useContext(UserContext)

    return (
        <div id="operator-tag">
                <p>
                    {auth ? <span>✎</span> : null}
                    {operatorTag.operator.name}
                    {auth ? <span>Delete icon</span> : null}
                </p>
                <span>
                    <p>Level: {operatorTag.level}</p>
                    <p>Potential: {operatorTag.potential}</p>
                </span>
        </div>
    )
}

export default PostTag