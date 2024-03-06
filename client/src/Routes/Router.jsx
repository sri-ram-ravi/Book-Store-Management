import React from 'react'
import { Routes,Route } from 'react-router-dom'
import {CreateBook,DeleteBook,EditBook,Home,ShowBook} from "../Pages/Index"
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/createbook' element={<CreateBook/>}/>
      <Route path='/showbook' element={<ShowBook/>}/>
      <Route path='/updatebook' element={<EditBook/>}/>
      <Route path='/deletebook' element={<DeleteBook/>}/>
    </Routes>
  )
}

export default Router