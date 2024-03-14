import React, { useEffect } from 'react'

const OrderFailed = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  })
  return (
    <div className='container'>
    <div className='h-screen flex flex-col justify-center items-center'>
        <img src="/order-failed.gif" className='w-96' alt="Green Tick" rel='nofollow' />
        <h1 className='font-bold text-6xl my-5'>Oops!</h1>
        <h2 className='text-lg my-5'>You Order has been failed</h2>
        <a href={`${process.env.REACT_APP_URL}`} className='py-3 px-10 bg-[#0112FE] text-white my-10 rounded-lg hover:opacity-50 decoration-none'>Continue Shopping</a>
    </div>
</div>
  )
}

export default OrderFailed