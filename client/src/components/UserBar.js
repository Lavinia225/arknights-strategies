import {NavLink} from 'react-router-dom'
import { UserContext } from "./context/user";
import {useContext} from 'react'

function UserBar() {
    const {user, setUser} = useContext(UserContext)
    console.log("Current user is", user)

    function logout(){
        fetch('/logout', {method: "delete"})
        .then(setUser({id: 0, displayName: null}))
    }
    
    return(
        <nav id="user-bar">
            {user.id != 0 ? <button onClick={logout}>Logout</button> : <NavLink to='/login'>Login</NavLink>}
        </nav>
    )
}

export default UserBar