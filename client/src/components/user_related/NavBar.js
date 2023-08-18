import {NavLink} from 'react-router-dom'
import { UserContext } from '../context/user'
import {useContext} from 'react'

function NavBar(){
    const {user} = useContext(UserContext)

    return(
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/posts'>Forum</NavLink>
            {user.access_level > 0 ? <NavLink to='/operators'>Operators</NavLink> : null}
        </nav>        
    )
}

export default NavBar