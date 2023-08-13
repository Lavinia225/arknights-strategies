import {useState} from 'react'
import {useContext} from 'react'
import { UserContext } from './context/user'
import {useHistory} from 'react-router-dom'

function LoginForm(){
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const {setUser} = useContext(UserContext)
    const [errors, setErrors] = useState([])
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        if (formData.username.length < 1 || formData.password.length < 1) return setErrors(["Username or Password is can not be blank."])

        const configObject = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        
        const response = await fetch('/login', configObject)
        const data = await response.json()
        
        if (response.ok){
            setUser(()=>data)
            history.push('/')
        }
        else{
            setErrors(data.errors)
        }
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='Username'>Username: </label>
                <input type='text' name='username' value={formData.username} onChange={handleChange}></input>
                <label htmlFor='Password'>Password: </label>
                <input type='password' name='password' value={formData.password} onChange={handleChange}></input>
                <button type='submit'>Submit</button>
            </form>
            {errors.length > 0 && (errors.map(error => <p key={error} style={{color: 'red'}}>{error}</p>))}
        </>
    )
}

export default LoginForm