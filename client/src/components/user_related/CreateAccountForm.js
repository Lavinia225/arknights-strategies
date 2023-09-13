import {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { UserContext } from '../context/user'

function CreateAccountForm({verifyOperators}){
    const [formData, setFormData] = useState({
        username: "",
        display_name: "",
        password: "",
        password_confirmation: ""
    })
    const [errors, setErrors] = useState([])
    const {setUser} = useContext(UserContext)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        if (!checkFormDataForEmptyFields()) return setErrors(["No fields can be blank."])

        const configObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }

        const response = await fetch('/signup', configObject)
        const data = await response.json()

        if(response.ok){
            setUser(data)
            verifyOperators()
            history.goBack()
        }
        else{
            setErrors(data.errors)
        }

        function checkFormDataForEmptyFields(){
            for (const key of Object.keys(formData)){
                if (formData[key].length < 1){
                    return false
                }
            }
            return true
        }
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return(
        <>
            <form id='new-account-form' onSubmit={handleSubmit}>
                <label htmlFor='Username'>Username: </label>
                <input type='text' name='username' value={formData.username} onChange={handleChange}></input>
                <label htmlFor='Display Name'>Display Name: </label>
                <input type='text' name='display_name' value={formData.display_name} onChange={handleChange}></input>
                <label htmlFor='Password'>Password: </label>
                <input type='password' name='password' value={formData.password} onChange={handleChange}></input>
                <label htmlFor='Password Confirmation'>Password Confirmation: </label>
                <input type='password' name='password_confirmation' value={formData.password_confirmation} onChange={handleChange}></input>
                <button type='submit'>Submit</button>
            </form>
            {errors.length > 0 && (errors.map(error => <p key={error} style={{color: 'red'}}>{error}</p>))}
        </>
    )
}

export default CreateAccountForm