import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const [formData, setFormData] = useState({})

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:3000/users",formData).then((data)=>{
            setFormData(formData);
        })
        navigate("/")
    }

    return (
        <div>
            <form onSubmit={handleRegister} className="form">
                <p className='italic mr-24'>
                    Welcome,<span>sign Up to continue</span>
                </p>
                <input type="text" placeholder='Enter your name' name='name' onChange={handleChange} />
                <input type="email" placeholder="Email" name="email" onChange={handleChange} />
                <input type="password" placeholder="Password" name="password" onChange={handleChange} />

                <button type='submit' className="oauthButton">
                    Register
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
                </button>
            </form>
        </div>
    )
}
