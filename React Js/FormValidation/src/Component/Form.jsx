import React, { useState } from 'react'

export default function Form() {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmpassword, setConfirmPassword] = useState("");
    const[err,setErr] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        let nameReg = /^[A-Z][a-z]{1,7}$/;
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        let erObj = {one:"", two:"", three:"", four:""};

        if(!nameReg.test(name)){
            erObj.one="Name is not valid"
        }else{
            erObj.one=""
        }
        if(!emailRegex.test(email)){
            erObj.two="Invalid email format"
        }else{
            erObj.two=""
        }
        if(!passwordRegex.test(password)){
            erObj.three="Strong password: 8+ chars, Aa1@"
        }else{
            erObj.three=""
        }
        if(password !== confirmpassword) {
            erObj.four="Password do not match"
        } else {
            erObj.four=""
        }
        setErr(erObj);
    }
    return (
        <div className="container">
            <div className="form_area">
                <p className="title">Form</p>
                <form onSubmit={handleSubmit}>
                    <div className="form_group">
                        <label className="sub_title">Name</label>
                        <input placeholder="Enter your name" className="form_style" type="text" onChange={(e)=>setName(e.target.value)}/>
                        <span>{err.one}</span>
                    </div>
                    <div className="form_group">
                        <label className="sub_title">Email</label>
                        <input placeholder="Enter your email" className="form_style" type="email" onChange={(e)=>setEmail(e.target.value)}/>
                        <span>{err.two}</span>
                    </div>
                    <div className="form_group">
                        <label className="sub_title">Password</label>
                        <input placeholder="Enter your password" className="form_style" type="text" onChange={(e)=>setPassword(e.target.value)}/>
                        <span>{err.three}</span>
                    </div>
                    <div className="form_group">
                        <label className="sub_title">Confirm Password</label>
                        <input placeholder="Enter your password" className="form_style" type="text" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                        <span>{err.four}</span>
                    </div>
                    <div>
                        <button className="btn" type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
