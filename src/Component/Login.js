import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RouterLink from "../RoutesLink";



function Login() {
    const navigate = useNavigate() // useNavigate is the hook 

    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { value, id } = e.target
        setForm((form) => ({
            ...form,
            [id]: value
        }))
    }
    return (
        <>
            <form>
                <label>Email</label>
                <br />
                <input type='email' value={form.email} onChange={(e) => handleChange(e)} id="email" />
                <br />
                <label>Password</label>
                <br />
                <input type='password' value={form.password} onChange={(e) => handleChange(e)} id="password" />
                <br />
                {/* <Link to={RouterLink.dashboard}> <button>Login</button></Link> */}
                <button onClick={() => navigate(RouterLink.dashboard)}>Login</button>

            </form>
        </>
    )
}

export default Login