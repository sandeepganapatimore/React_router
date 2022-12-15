import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import RouterLink from '../RoutesLink';


function Procted() {
    const auth = localStorage.getItem("loggedIn")
    const auth1 = localStorage.getItem("user")
    return (
        <div>
            {
                auth && auth1 ? <Outlet /> : <Navigate to={RouterLink.screen} />
            }
        </div>
    )
}

export default Procted;
