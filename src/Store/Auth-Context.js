import React, { useState } from 'react'

const AuthContext = React.createContext({
    token:'',
    isLoggedIn:false,
    Login:(token)=>{},
    Logout:()=>{}
})

export  const AuthContextProvider = (props)=>{

    const [token,settoken] = useState(null)

    const userIsLoggedIn = !!token//if token is empty string then it return false else return true

    //making functions for updating each state

    const loginHandler = (token)=>{
        settoken(token)
    }

    const logoutHandler = ()=>{
        settoken(null)
    }

    const contextValue = {
        token:token,
        isLoggedIn:userIsLoggedIn,
        Login:loginHandler,
        Logout:logoutHandler
    }

        return(
            <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
        )
}


export default AuthContext