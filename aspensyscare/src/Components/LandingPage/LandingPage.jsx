import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../layouts/Footer/Footer';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { Helmet } from "react-helmet";
import { fetchBanner } from '../../Api/Api';

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
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [dispatch])
  return (
    <LandingBox>
      <Helmet>
        <title>Buy Best Home, Kitchen, Skin & Body care products in India at best price || apsensyscare</title>
        <meta name="description" content="Buy Best Home, Kitchen, Skin & Body care products in India at best price || apsensyscare" />
      </Helmet>
      <Outlet />
      <Footer />
    </LandingBox>
  )
}

export default LandingPage
