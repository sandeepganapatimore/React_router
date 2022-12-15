import React, { useState } from "react";
import { Link, Outlet, useNavigate } from 'react-router-dom'
import RouterLink from "../RoutesLink";


function DashBoard() {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    return (
        <div>
            <h1>WelCome to DashBoard</h1>

            {/* <Outlet /> is used to show child component element data */}

            {/* navigate is the Hook which takes two arguments first is the desired path to which it wants to navigat
    second argument is replace which means *if pass replace:true* then it will make current route as root router */}

            {/* here -1 first argument indicates the previous history of the page  */}

            {/* 
            <Link to='/dashboard/feature'>Feature</Link>  gives the example of the relative links which means
            if we give */}

            {/*   / in the Link then it ask the parent page of the current page so.. */}
            {/* it's better to give the plan link */}



            <label>Search the Products</label>
            <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
            <div>
                <Link to='/dashboard/feature'>Feature</Link>
                <Link to={RouterLink.feature}>Feature</Link>
                <br />
                <Link to='newfeature'>New </Link>
            </div>
            <Outlet />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <button onClick={() => navigate(RouterLink.login, { replace: true })} style={{ marginRight: "400px" }}>Back tohome page</button>
            <button onClick={() => navigate(RouterLink.login, { replace: false })} style={{ marginRight: "300px" }}>Back  page</button>
            <button onClick={() => navigate(-1)} style={{ marginRight: "200px" }}>Go Back -1</button>
            <button onClick={() => navigate(RouterLink.profile)}>profile</button>

        </div>
    )
}

export default DashBoard;