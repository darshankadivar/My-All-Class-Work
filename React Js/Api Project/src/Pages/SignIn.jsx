import axios from 'axios'
import React, { useState } from 'react'
import { data, Link, useNavigate } from 'react-router-dom'

export default function SignIn() {
    const [formData, setFormData] = useState({})

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        await axios.get("http://localhost:3000/users").then((res) => {
            const users = res.data;

            const user = users.find((u) => u.email == formData.email)

            if (user)
                if (user.password == formData.password) {
                    alert("Login Successful!");
                    navigate("/homepage")
                } else {
                    alert("Password is Wrong");
                } else {
                    alert("User not matched");
            }
        })

    }

    return (
        <div>
            <form onSubmit={handleLogin} className="form">
                <p className='italic mr-24'>
                    Welcome ,<span>sign in to continue</span>
                </p>
                <input type="email" placeholder="Email" name="email" onChange={handleChange} />
                <input type="password" placeholder="Password" name="password" onChange={handleChange} />

                <button type='submit' className="oauthButton">
                    Login
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
                </button>
                <div className=' flex justify-center items-center'>
                    <p>Don't have an account ?<span className='mx-2 underline'><Link to={"/signup"}>Sign Up</Link></span></p>
                </div>
            </form>
        </div>
    )
}
