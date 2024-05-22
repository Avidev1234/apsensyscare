import React, { useState } from 'react';
import { userResetPassword } from '../../Api/Api';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    userResetPassword({ email }) // Pass an object with the email field
      .then((res) => {
        console.log('Success:', res);
        // Redirect to OTP verification page or display OTP input field
      })
      .catch((err) => {
        // console.log('Error:', err);
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className='w-full flex justify-center'><strong>Forgot Password</strong></h3>
      <div className='w-full flex justify-center p-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder='Enter Email'
          onChange={(e) => setEmail(e.target.value)}
          required
          className='shadow appearance-none border rounded w-[50%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      {errorMessage && <p className="text-red-500 text-sm text-center mb-4">{errorMessage}</p>}
      <button type="submit" className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Submit</button>
    </form>
  );
}
