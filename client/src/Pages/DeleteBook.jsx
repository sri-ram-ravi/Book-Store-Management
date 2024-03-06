import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteBook = () => {
  const {id} = useParams()
  const navigation=useNavigate();
  const [loader,setLoader]=useState(false)
  useEffect(()=>{
    const deleteBookDetails=async()=>{
      try{
        setLoader(true)
        await axios.delete(`http://localhost:4000/deletebook/${id}`)
        navigation("/")
        setLoader(false)
      }catch(error){
        console.log("Error",error)
        setLoader(true)
      }
    }
    deleteBookDetails()
  },[])
  return (
    <div>DeleteBook</div>
  )
}

export default DeleteBook