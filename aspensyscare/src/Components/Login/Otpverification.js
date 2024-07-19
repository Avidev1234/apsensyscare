// import React, {  useState } from 'react';
// // import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { UserupdatePassword } from '../../Api/Api';
// // import { updatePassword, customerbyId } from '../../Api/Api';
// const phonenum = JSON.parse(localStorage.getItem('__phone')) ;

// function Otpverification() {
//   // const { userid } = useParams();
//   // const [customeredit, setCustomeredit] = useState({});

//   const initialPasswordState = {
//     password: '',
//     otp: '',
//     confirmPassword: '',
//     phone: JSON.stringify(phonenum)
// };
// // console.log(initialPasswordState.phone);

//   // useEffect(() => {
//   //   customerbyId({ userid }).then((res) => {
//   //     console.log(res);
//   //     setCustomeredit(res[0]);
//   //   });
//   // }, [userid]);

//   const [password, setPassword] = useState(initialPasswordState);

//   const validatePassword = (password) => {
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
//     return passwordRegex.test(password);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPassword((prev) => ({ ...prev, [name]: value }));
//   };
 
// const updateClick = () => {
//     if (password.password !== password.confirmPassword) {
//         console.error('Passwords do not match');
//         toast.error('Passwords do not match');
//     } else if (!validatePassword(password.password)) {
//         console.error('Password does not meet requirements');
//         toast.error('Password does not meet requirements');
//     } else {
//       UserupdatePassword(password)
//             .then(() => {
//                 console.log('Password updated successfully');
//                 setPassword(initialPasswordState);
//             })
//             .catch((error) => {
//                 console.error('Error updating password:', error);
//                 toast.error('Error updating password');
//             });
//     }
// };


//   return (
//     <div>
//       <h3 className='w-full flex justify-center'><strong>Forgot Password</strong></h3>
//       <div className='w-full flex flex-col justify-center p-4 gap-4'>
//         <div className='w-full border flex flex-col items-center justify-center p-4 gap-4'>
//           <form className="max-w-[97%]">

//             {/* <label className='block text-gray-700 text-lg font-bold mt-2'>Phone number:</label>
//             <input
//               type="number"
//               name="phone"
//               placeholder='Enter phone number'
//               required
//               value={password.phone}
//               // value="6205975082"
//               onChange={handleChange}
//               className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//             /> */}
//             <label className='block text-gray-700 text-lg font-bold mt-2'>OTP:</label>
//             <input
//               type="number"
//               name="otp"
//               placeholder='Enter Otp'
//               required
//               value={password.otp}
//               onChange={handleChange}
//               className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//             />
//             <label className='block text-gray-700 text-lg font-bold mt-2'>New Password:</label>
//             <input
//               type="text"
//               name="password"
//               placeholder='Enter New Password'
//               required
//               value={password.password}
//               onChange={handleChange}
//               className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//             />
//             <label className='block text-gray-700 text-lg font-bold mt-2'>Confirm Password:</label>
//             <input
//               type="text"
//               name="confirmPassword"
//               placeholder='Enter Confirm Password'
//               required
//               value={password.confirmPassword}
//               onChange={handleChange}
//               className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//             />
//           </form>
//         </div>
//         <button
//           type="submit"
//           className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-[15%] mx-auto'
//           onClick={updateClick}
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Otpverification;
