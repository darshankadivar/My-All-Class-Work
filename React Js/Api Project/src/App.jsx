import React from 'react'
import {BrowserRouter, Route, Routes }  from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AddPost from './Pages/AddPost'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/homepage' element={<HomePage/>}></Route>
          <Route path='/addpost' element={<AddPost/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
