import EditOperatorForm from "./EditOperatorForm"
import { OperatorContext } from "./context/operator"
import {useParams} from 'react-router-dom'
import {useContext, useState} from 'react'

function IndividualOperator(){
    const params = useParams()
    const {operators} = useContext(OperatorContext)
    const [editing, setEditing] = useState(false)
    const [operator, setOperator] = useState({name: ""})


}

export default IndividualOperator