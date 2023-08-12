import {NavLink} from 'react-router-dom'
import { UserContext } from "./context/user";
import {useContext} from 'react'

function UserBar() {
    const {user} = useContext(UserContext)

    return(
        <nav id="user-bar">
            {user.id != 0 ? <NavLink to='/logout'>Logout</NavLink> : <NavLink to='/login'>Login</NavLink>}
        </nav>
    )
}

export default UserBar