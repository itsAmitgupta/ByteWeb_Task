import React from 'react'
import { useNavigate } from 'react-router-dom'
const Dashbaord = () => {
    const navigate = useNavigate();
    const logout = (e) =>{
        e.preventDefault();
        navigate('/')
    }
  return (
    <>
    <div>Dashbaord</div>
    <button onClick={logout}>Logout</button>
    </>
  )
}

export default Dashbaord