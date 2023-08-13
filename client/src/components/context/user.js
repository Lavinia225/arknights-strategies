import { useState, createContext, useEffect } from "react";

const UserContext = createContext()

function UserProvider({children}){
    const [user, setUser] = useState({
        id: 0,
        displayName: null
    })

    useEffect(()=>{
        fetch('/me')
        .then(res =>{
            if (res.ok){
                res.json()
                .then(user => setUser(user))
            }})}, []
    )

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}

export {UserContext, UserProvider}