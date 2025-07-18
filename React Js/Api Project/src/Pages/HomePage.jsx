import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import { CiMenuKebab } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFatLight } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [posts, setPosts] = useState([])
  const [activeMenuIndex, setActiveMenuIndex] = useState(null)
  // const [likes, setLikes] = useState(0)
  // const [isExpanded, setIsExpanded] = useState(false)

  const navigate = useNavigate()

    const toggleMenu = (index)=>{
      if(activeMenuIndex === index) {
        setActiveMenuIndex(null);
      } else {
        setActiveMenuIndex(index)
      }
    }
    // setLikes((count)=>count+1)
  const toggleLike = (index) => {
    const updatePosts = [...posts]
    updatePosts[index].likes = (updatePosts[index].likes || 0 ) + 1;
    setPosts(updatePosts)
  }

  const toggleExpand = (index) => {
    const updatePosts = [...posts];
    updatePosts[index].isExpanded = !updatePosts[index].isExpanded;
    setPosts(updatePosts)
    // setIsExpanded(updatePosts)
  }

  useEffect(()=>{
    fetchApi()
  },[])

  const fetchApi = async () => {
    await axios.get("http://localhost:3000/posts").then((data)=>{
      // setPosts(data.data)
      const postsWithExpand = data.data.map(post=>({
        ...post,
        isExpanded: false
      }))
      setPosts(postsWithExpand)
    })
  }

  const handleDelete = async(id) => {
    await axios.delete(`http://localhost:3000/posts/${id}`).then((res)=>{
      let newRecord = posts.filter((item)=>item.id != id);
      setPosts(newRecord)
    })
  }

  const handleEdit = (id) => {
    let singleData = posts.find((item)=>item.id == id)
    
    navigate("/addpost", {state: {editData : singleData}})
  }

  return (
    <div>
      <Navbar/>

      <div className='mt-30 grid grid-cols-3  w-full max-w-7xl mx-auto gap-3'>
        {
          posts.length > 0 ? (
            posts.map((post,index)=>(
              <div key={index} className=' relative bg-white rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 w-full max-w-sm mx-auto  hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]'>
                <div className=' absolute top-2 right-2'>
                  <button onClick={()=>toggleMenu(index)} className='cursor-pointer'>
                    <CiMenuKebab />
                  </button>
                  {activeMenuIndex === index && (
                    <div className='absolute right-3  w-28 bg-white/70 backdrop-blur-md border border-gray-300 rounded shadow-md z-10'>
                      <button onClick={()=>handleEdit(post.id)} className='w-full text-left px-4 py-2 hover:bg-gray-200 text-sm'>
                        ✏️ Edit
                      </button>
                      <button onClick={()=>handleDelete(post.id)} className='w-full text-left px-4 py-2 hover:bg-gray-200 text-sm'>
                        🗑️ Delete
                      </button>
                    </div>
                  )}
                </div>
                <h2>{post.name}</h2>
                <p className='text-sm mt-1'>{post.location}</p>
                <img src={post.imageUrl} alt={post.imageUrl} className='w-full h-48 object-cover rounded mt-2'/>
                <div className=' flex gap-8 items-center mt-4'>
                  <button onClick={()=>toggleLike(index)} className=' flex items-center gap-1 hover:text-red-500'>
                    <FaHeart /> {post.likes || 0}
                  </button>
                  <button className=' flex items-center gap-1'>
                    <FaRegComment />
                  </button>
                  <button className=' flex items-center gap-1'>
                    <PiShareFatLight />
                  </button>
                </div>
                <p onClick={()=>toggleExpand(index)} className={`mt-2 cursor-pointer overflow-hidden text-sm  ${ post.isExpanded ? "" : "line-clamp-2"}`} >{post.content}</p>
               
              </div>
            ))
          ) : <p>No Post Found</p>
        }
      </div>
    </div>
  )
}
