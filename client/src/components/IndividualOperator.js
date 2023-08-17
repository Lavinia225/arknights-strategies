import EditOperatorForm from "./EditOperatorForm"
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

function IndividualOperator(){
    const params = useParams()
    const [editing, setEditing] = useState(false)
    const [errors, setErrors] = useState([])
    const [operator, setOperator] = useState({name: ""})

    useEffect(()=>{
        setOperator(getOperator)
        async function getOperator(){
            const response = await fetch(`/operators/${params.id}`)
            const data = await response.json()

            if(response.ok){
                setOperator(data)
            }
            else{
                setErrors(data)
            }
        }
    }, [])
    console.log(operator)
}

export default IndividualOperator