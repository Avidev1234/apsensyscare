import React, { useEffect } from 'react'
import Navbar from '../layouts/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../layouts/Footer/Footer';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBanner } from '../../Store/Slices/bannerSlice';

const LandingBox = styled(Box)`
width:97.77vw;
height:auto;
@media (min-width:1440px){
  width:1440px;
  background-color:#fff;
}
`


const LandingPage = () => {
  const dispatch = useDispatch();
  const banner = useSelector((state) => state.user);
  console.log(banner)
  useEffect(() => {
      try {
        dispatch(fetchBanner());
      } catch (error) {
        console.log("hello");
      }
    
  }, [])
  return (
    <LandingBox>
      <Navbar />
      <Outlet />
      <Footer />
    </LandingBox>
  )
}

export default LandingPage
