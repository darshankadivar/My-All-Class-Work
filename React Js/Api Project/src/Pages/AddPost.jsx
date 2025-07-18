import React, { useState } from 'react'
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

export default function AddPost() {
    const location = useLocation()
    const editData = location.state?.editData || {}


    const [formData, setFormData] = useState({
        name: editData.name || "",
        location: editData.location || "",
        content: editData.content || "",
        imageUrl: editData.imageUrl || ""
    })
    const [record, setRecord] = useState([])

    const navigate = useNavigate()


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!editData.id) {
            await axios.post("http://localhost:3000/posts", formData).then((res) => {
                setRecord([...record, formData])
            })
            navigate("/homepage")
        } else {
            await axios.put(`http://localhost:3000/posts/${editData.id}`,formData).then((res) => {
                setFormData({
                    name: "",
                    location: "",
                    imageUrl: "",
                    content: ""
                })
                navigate("/homepage")
            })
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex justify-center items-center  w-md  mx-auto p-15 mt-10 flex-col gap-3 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-md'>
                <input type="text" name='name' value={formData.name} className="border border-gray-300 text-gray-900 w-2xs text-sm rounded-md block p-2.5 outline-none shadow-[5px_5px_0px_0px_rgba(109,40,217)]" placeholder="Enter Your Name" required onChange={handleChange} />
                <input type="text" value={formData.location} name='location' className="bg-gray-50 border border-gray-300 text-gray-900 w-2xs text-sm rounded-md block p-2.5 outline-none shadow-[5px_5px_0px_0px_rgba(109,40,217)]" placeholder='City, place or Landmark' onChange={handleChange} />
                <input type="text" value={formData.imageUrl} name='imageUrl' className="bg-gray-50 border border-gray-300 text-gray-900 w-2xs text-sm rounded-md block p-2.5 outline-none shadow-[5px_5px_0px_0px_rgba(109,40,217)]" placeholder='https://example.com/image.jpg' onChange={handleChange} />
                <textarea rows={4} value={formData.content} name='content' className="bg-gray-50 border border-gray-300 text-gray-900 w-2xs  text-sm rounded-md block p-2.5 outline-none shadow-[5px_5px_0px_0px_rgba(109,40,217)]" placeholder="Write your thoughts here..." onChange={handleChange}></textarea>
                
                <button type='submit' className="relative px-6 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group mt-10">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">{location.state?.editData ? "Update" : "Submit"}</span>
                </button>
            </form>

        </div>
    )
}
