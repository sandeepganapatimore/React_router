import React, { useState } from 'react'

function LoginPage() {
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
        <div className='container'>
            <form>
                <label>Email</label>
                <br />
                <input type='email' value={form.email} onChange={(e) => handleChange(e)} id='email' />
                <br />
                <label>Password</label>
                <br />
                <input type='password' value={form.password} onChange={(e) => handleChange(e)} id='password' />
                <br />

            </form>
            <br />
        </div>
    )
}

export default LoginPage
