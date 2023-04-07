import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
const LandingPage = () => {
  const [login, setLogin] = useState(false);
  return (

    <>
      <Navbar login={login} />
      <Outlet />
      <Footer />
    </>
  )
}

export default LandingPage
