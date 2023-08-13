import {useState} from 'react'
import {useContext} from 'react'
import { UserContext } from './context/user'

function LoginForm(){
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const {setUser} = useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault()

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(user =>setUser(user))
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='Username'>Username: </label>
            <input type='text' name='username' value={formData.username} onChange={handleChange}></input>
            <label htmlFor='Password'>Password: </label>
            <input type='password' name='password' value={formData.password} onChange={handleChange}></input>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default LoginForm