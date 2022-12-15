import React from 'react'
import { useNavigate } from 'react-router-dom'
import RouterLink from '../RoutesLink'

function Profile() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>What You want to see about your self</h1>
            <button onClick={() => navigate(RouterLink.dashboard, { replace: true })}>Go Back</button>
            <button onClick={() => navigate(-1, { replace: false })}> Back</button>
            <button onClick={() => navigate(-1)}>Go Back -1</button>
            <button onClick={() => navigate(RouterLink.user)}>Next</button>
        </div>
    )
}

export default Profile
