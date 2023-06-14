import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();
  const value = useLocation();
  console.log(value)
  useEffect(() => {
    if (value.state === null) {
      console.log('hello')
      navigate('/')
    }
  })

  return (
    <div className='container'>
      <div className='h-screen flex flex-col justify-center items-center'>
        <img src="/green-tick.webp" className='w-96' alt="Green Tick" rel='nofollow' />
        <h1 className='font-bold text-6xl my-5'>Thank You</h1>
        <h2 className='text-lg my-5'>You Order has been processed</h2>
        <div onClick={() => navigate('/')} className='py-3 px-10 bg-[#0112FE] text-white my-10 rounded-lg hover:opacity-50 decoration-none'>Continue Shopping</div>
      </div>
    </div>
  )
}

export default ThankYou