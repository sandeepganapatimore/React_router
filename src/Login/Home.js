import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import RouterLink from '../RoutesLink';

const Home = () => {
    const navigate = useNavigate()

    console.log('hello bro')
    const login = localStorage.getItem('user');
    const bolean = localStorage.getItem('loggedIn')


    useEffect(() => {
        if (login && bolean) {
            navigate(RouterLink.fifa)
        }
        // else (
        //     navigate(RouterLink.screen)
        // )
        // <Outlet />

    }, [])


    return (
        <div>
            {/* <h1>Welcome to Last Dance</h1>
            <button onClick={() => navigate(RouterLink.register)}>Next</button> */}
            <Outlet />
        </div>
    )
}

export default Home
