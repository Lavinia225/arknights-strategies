import {NavLink} from 'react-router-dom'
import { UserContext } from "./context/user";
import {useContext} from 'react'

function UserBar() {
    const {user, setUser} = useContext(UserContext)

    function renderWelcomeAndLogout(){
        return(
            <>
                <p>Welcome, {user.display_name}!</p>
                <button onClick={logout}>Logout</button>
            </>
        )
    } 

    function logout(){
        fetch('/logout', {method: "delete"})
        .then(setUser({id: 0, displayName: null}))
    }
    
    return(
        <nav id="user-bar">
            {user.id !== 0 ? renderWelcomeAndLogout() : <NavLink to='/login'>Login</NavLink>}
        </nav>
    )
}

export default UserBar