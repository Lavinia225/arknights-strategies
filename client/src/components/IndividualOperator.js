import EditOperatorForm from "./EditOperatorForm"
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

function IndividualOperator(){
    const params = useParams()
    const [editing, setEditing] = useState(false)
    const [operator, setOperator] = useState({name: ""})

    useEffect(()=>{
        //find operator from operators prop
    })
    
}

export default IndividualOperator