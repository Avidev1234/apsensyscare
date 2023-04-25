import React, { useEffect } from 'react'
import Navbar from '../layouts/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../layouts/Footer/Footer';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBanner } from '../../Store/Slices/bannerSlice';
import { fetchCategory } from '../../Store/Slices/categorySclice';
import { AllProducts } from '../../Store/Slices/productSlice';

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
  useEffect(() => {
    async function fetchData() {
      try {
        await dispatch(fetchBanner());
        await dispatch(fetchCategory());
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();

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
