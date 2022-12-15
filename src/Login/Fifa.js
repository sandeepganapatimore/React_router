import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RouterLink from '../RoutesLink'

function Fifa() {
    // const [searchParam, setSearchParam] = useParams()

    // const activeUsers = searchParam.get('filter') === 'active'

    const navigate = useNavigate()
    const data = JSON.parse(localStorage.getItem('user'))
    const data1 = JSON.parse(localStorage.getItem('loggedIn'))
    console.log('Fifa', data)

    const handleBack = (e) => {
        localStorage.removeItem("loggedIn")
        localStorage.removeItem("user")
        navigate(RouterLink.screen)
    }

    // useEffect(() => {
    //     if (data && data1) {
    //         navigate(RouterLink.fifa)
    //     }
    //     else (
    //         navigate(RouterLink.screen)
    //     )
    //     // <Outlet />

    // }, [navigate])
    return (
        <div>
            <h1>Here We Go</h1>
            <p>We are glad that you have subscribed to our platform</p>
            <p>Have a Good day </p>
            <h1 style={{ color: 'green' }}><i>{data.Name}</i></h1>

            {/* 
                <div>
                    <button onClick={() => setSearchParam({ filter: 'active' })}>Active Users</button>
                    <button onClick={() => setSearchParam({})}>Reset filter</button>
                </div>
                {
                    activeUsers ? (
                        <h1 style={{ color: 'green' }}><bold><i>{data.Name}</i></bold></h1>
                    ) : (
                        <h1>Currently No active Users</h1>
                    )
                } */}



            <button onClick={handleBack}>Logout</button>
        </div>
    )
}

export default Fifa
