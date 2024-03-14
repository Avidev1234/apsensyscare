import React, { useRef, useState } from 'react'
import {UnsubscribeEmail} from '../Api/Api'
import { toast } from 'react-toastify';
const Unsubscribe = () => {
    const [email,setEmail]=useState('');
    const [unsubscribed,setUnsubscribed]=useState("{}");
    const refvalue=useRef("")
    const DoUnsubscribe= async(email)=>{
        const unsubscribe= await UnsubscribeEmail({'email':email})
        setUnsubscribed(unsubscribe)
    }
    console.log((unsubscribed.status))
    if(unsubscribed?.status===200){
        toast.success("Unsubscribed")
        refvalue.current.value=""
    }
    return (
        <div>
            <div className="h-auto md:h-[95vh] flex justify-center items-center">
                
                <div className="text-[20px]">
                <h1 className="text-[30px] text-[red]">Unsubscribe</h1>
                    <p>Dear Customer,</p>
                    <p>&nbsp;</p>
                    <p>We acknowledge your instruction to not recieve any marketing e-mailers. By Clicking the confirm button below you will stop receiving e-mailers on this email ID</p>
                    <p>&nbsp;</p>
                    <form>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Please confirm your Email address:</label>
                            <input
                            ref={refvalue} type="email" className="outline-none border-2 border-[gray] rounded my-2 px-4 py-3 text-[16px]" id="email" name="email" placeholder="Your Email ID" onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <button type='button' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={()=>{DoUnsubscribe(email)}}
                        >
                            Confirm</button>
                    </form>
                    <p></p>
                    <p>&nbsp;</p>
                    <p>Clicking on the confirm button will un-subscribe this e-mail address from our promotional/ marketing email only. Please give us 14 working days, from the day we receive this request to action the same</p>
                    <p>&nbsp;</p>
                    <p>Warm regards, <br />
                        The ApsensysCare Team</p>
                </div>

            </div>
        </div>
    )
}

export default Unsubscribe