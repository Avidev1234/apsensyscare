import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { recentOrder } from '../Api/Api';
import { Genaratemail } from '../Function/helper';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
const ThankYou = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams()
  const [order,SetOrder]=useState(null)
  //const value = useLocation();
  //console.log(value)

  const RecentOrder= async (paymentID)=>{
    const data= await recentOrder({"paymentid":paymentID})
    SetOrder(data);
  }

console.log(order);
  useEffect(() => {
    // if (value.state === null) {
    //   console.log('hello')
    //   navigate('/')
    // }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    RecentOrder(searchParams.get('param'))
  },[])
  if(order!==null){
    Genaratemail(order).then((res)=>{
      emailjs.send('service_ku0q4co', 'template_sgadbch', res, 'OW7pYkljP7tzyg0Pz')
        .then((result) => {
          toast.info("order placed", {
            position: "bottom-left",
          });
        }, (error) => {
          // show the user an error
          console.log("message not send")
        });
    })
    .catch((err)=>{
      console.log("somthing went Wrong")
    })
    // console.log(emailTemplet)
  }
  return (
    <div className='container'>
      <div className='h-screen flex flex-col justify-center items-center'>
        <img src="/green-tick.webp" className='w-96' alt="Green Tick" rel='nofollow' />
        <h1 className='font-bold text-6xl my-5'>Thank You</h1>
        <h2 className='text-lg my-5'>You Order has been processed</h2>
        <div onClick={() => navigate('/')} className='py-3 px-10 bg-[#0112FE] text-white my-10 rounded-lg hover:opacity-50 decoration-none cursor-pointer'>Continue Shopping</div>
      </div>
    </div>
  )
}

export default ThankYou