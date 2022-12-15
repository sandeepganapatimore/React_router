import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RouterLink from "../RoutesLink";


export default function Screen() {
    const navigate = useNavigate()

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



    const handleLogin = (e) => {
        e.preventDefault();
        const loggedData = JSON.parse(localStorage.getItem("user"));
        // const loggedData=localStorage.getItem('users')
        console.log('getting the credentials', loggedData)
        if (form.email === loggedData.email && form.password === loggedData.password) {
            localStorage.setItem('loggedIn', true);
            navigate(RouterLink.fifa)
        }
        else {
            alert('Credintials entered are wrong')
        }


    }

    return (
        <div>
            <h1>
                Welcome to Fifa Login Your Data
            </h1>

            <form onSubmit={handleLogin}>
                <label>Email</label>
                <br />
                <input type='email' value={form.email} onChange={(e) => handleChange(e)} id="email" />
                <br />
                <label>Password</label>
                <br />
                <input type='password' value={form.password} onChange={(e) => handleChange(e)} id="password" />
                <br />
                <button>Login</button>

                <p>Didn't have any account</p><button onClick={() => navigate(RouterLink.register)}>Create account</button>
            </form>
            {

            }
        </div>
    )
}