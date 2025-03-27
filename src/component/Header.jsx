import React from 'react'
import '../style/Header.css'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();

  function goHome (){
    navigate("/");
  }
  function goStudents (){
    navigate("/Students");
  }
  function goContect (){
    navigate("/Contect/us");
  }

  
  return (
    <>
       <div className='Header'>
           <p className='btn' onClick={goHome}>Home</p>
           <p className='btn' onClick={goStudents}>Students</p>
           <p className='btn' onClick={goContect}>Contec us</p>
       </div>
    </>
  )


}

export default Header