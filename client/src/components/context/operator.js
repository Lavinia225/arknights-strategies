import { useState, createContext, useEffect } from "react";

const OperatorContext = createContext()

function OperatorProvider({children}){
    const [operators, setOperators] = useState([])
    const [operatorErrors, setOperatorErrors] = useState([])

    useEffect(()=>{
        getOperators()

        async function getOperators(){
            const response = await fetch('/operators')
            const data = await response.json()

            if (response.ok){
                setOperators(data)
            }
            else{
                setOperatorErrors(data.errors)
            }
        }
        }, []
    )

    return <OperatorContext.Provider value={{operators, setOperators, operatorErrors, setOperatorErrors}}>{children}</OperatorContext.Provider>
}

export {OperatorContext, OperatorProvider}