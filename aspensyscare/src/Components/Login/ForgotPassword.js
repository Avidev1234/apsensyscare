import React, { useState } from 'react';
import { userResetPassword } from '../../Api/Api';
import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer  } from "react-toastify";
import { useNavigate } from 'react-router-dom';
export default function ForgotPassword() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
   
  const handleSubmit = (e) => {
    e.preventDefault(); 

    userResetPassword( {phone} ) // Pass an object with the phone field
      .then((res) => {
        console.log('Success:', phone);
        toast.success(res.message|| 'We have send reset password link to your registerd phone');
        // Redirect to OTP verification page or display OTP input field
        navigate(`/otp-verification`);
        localStorage.setItem('__phone', phone);
      })
      .catch((err) => {
        if(phone ===''){
          toast.error( 'Enter the phone  ');
        }else{
          setErrorMessage(err.response.data.message);
          toast.error(err.response?.data?.message || 'phone number has been not registered ');
  
        }
        // console.log('Error:', err);
       
      });

      
  };

  return (
      <>
    <form>
      <h3 className='w-full flex justify-center'><strong>Forgot Password</strong></h3>
      <div className='w-full flex justify-center p-4 gap-4'>
        <label className='block text-gray-700 text-lg font-bold mt-2 '>phone:</label>
        <input
          type="number"
          id="phone"
          value={phone}
          placeholder='Enter Number'
          onChange={(e) => setPhone(e.target.value)}
          required
          className='shadow appearance-none border rounded w-[50%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
         <button type="submit" className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ' onClick={handleSubmit}>Send Otp</button>
      </div>
      {/* {errorMessage && <p className="text-red-500 text-sm text-center mb-4">{errorMessage}</p>}  */}
     
    </form>
    <ToastContainer />
    </>
  );
}
