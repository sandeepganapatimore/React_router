import React from 'react'
import { useNavigate } from 'react-router-dom'
import RouterLink from '../RoutesLink'

function Start() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Getting the list of the profile data </h1>
            <button onClick={() => navigate(RouterLink.profiles)}>Show data</button>

        </div>
    )
}

export default Start
