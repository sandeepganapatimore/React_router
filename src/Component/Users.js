import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
function Users() {
    // const [search, setSearchParam] = useParams()
    // const activeUsers = search.get('filter') === 'active'
    return (
        <div>
            <h1>user1</h1>
            <h1>user2</h1>
            <h1>user3</h1>
            <Outlet />
            <div>
                {/* <button onClick={() => setSearchParam({ filter: 'active' })}>Active users</button>
                <button onClick={() => setSearchParam({})}>Reset User</button> */}
                {/* <button>Active</button> */}
            </div>
            {/* {
                activeUsers ? (
                    <h2>Showing all active users</h2>
                ) : (
                    <h2>Showing all users</h2>
                )
            } */}
        </div>
    )
}

export default Users
