import React from 'react'
import Navbar from '../layouts/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../layouts/Footer/Footer';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

const LandingBox=styled(Box)`
width:97.77vw;
height:auto;
@media (min-width:1440px){
  width:1440px;
  background-color:#fff;
}
`
const LandingPage = () => {
  return (

    <LandingBox>
      <Navbar/>
      <Outlet />
      <Footer />
    </LandingBox>
  )
}

export default LandingPage
