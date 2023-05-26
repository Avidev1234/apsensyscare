import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ThankYou = () => {
  return (
    <div className='container'>
        <div className='h-screen flex flex-col justify-center items-center'>
            <img src="/green-tick.webp" className='w-96' alt="Green Tick" rel='nofollow' />
            <h1 className='font-bold text-6xl my-5'>Thank You</h1>
            <h2 className='text-lg my-5'>You Order has been processed</h2>
            <a href={`${process.env.REACT_APP_URL}`} className='py-3 px-10 bg-[#0112FE] text-white my-10 rounded-lg hover:opacity-50 decoration-none'>Continue Shopping</a>
        </div>
    </div>
  )
}

export default ThankYou