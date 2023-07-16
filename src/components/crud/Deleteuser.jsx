import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const Deleteuser = () => {
    let navigate=useNavigate()
    let {editpath} = useParams()
    useEffect(() =>{
        axios.delete(`http://localhost:3001/users/${editpath}`)
    .then(()=>{
        navigate('/user')
      alert("Success")
    })
    .catch(()=>{
      alert("error deleting")
    })
      },[])
  return (
    <>

    </>
  )
}

export default Deleteuser