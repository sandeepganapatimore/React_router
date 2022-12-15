import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RouterLink from "../RoutesLink";



function Register() {
    const navigate = useNavigate() // useNavigate is the hook 

    const [form, setForm] = useState({
        Name: "",
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

    // to store value in local storage.....

    const handlesubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(form))
        navigate(RouterLink.screen)
    }

    return (
        <>
            <form onSubmit={handlesubmit}>
                <h1>Watch Fifa 2022 Free</h1>
                <label>Name</label>
                <br />
                <input type='text' value={form.Name} id='Name' onChange={(e) => handleChange(e)} style={{ width: "30px" }} />
                <br />
                <label>Email</label>
                <br />
                <input type='email' value={form.email} onChange={(e) => handleChange(e)} id="email" />
                <br />
                <label>Password</label>
                <br />
                <input type='password' value={form.password} onChange={(e) => handleChange(e)} id="password" />
                <br />
                {/* <Link to={RouterLink.dashboard}> <button>Login</button></Link> */}
                <button >Register</button>


            </form>
        </>
    )
}

export default Register