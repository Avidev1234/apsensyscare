import React from 'react'
import { useNavigate } from 'react-router-dom';

const Advertise = () => {
  const navigate=useNavigate()
  const handelNavigation=()=>{
    navigate('/category')
  }
  return (
    <div className='w-full cursor-pointer ' onClick={handelNavigation}>
        <img className='w-full h-full object-contain' src='https://apsensyscare.com/assets/Poster/ACS-Banner.webp' alt='first-banner'/>
    </div>
  )
}

export default Advertise