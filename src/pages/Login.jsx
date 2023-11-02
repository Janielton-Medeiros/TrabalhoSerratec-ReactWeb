import React from "react"
import { Outlet } from "react-router-dom"

const Login = () => {
    return (

        <>
        <div>
            <Outlet/>
        </div>
        <div>TESTE LOGIN</div>
        
        </>
    )
}

export default Login