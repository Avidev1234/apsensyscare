import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Helmet } from "react-helmet";
import { fetchBanner } from '../../Api/Api';

// const LandingBox = styled(Box)`
// width:97.77vw;
// height:auto;
// @media (min-width:1440px){
//   width:1440px;
//   background-color:#fff;
// }
// `

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
    <div className='w-[97.77vw] 2xl:w-[1440px] bg-[#fff] mt-[15px]'>
      <Helmet>
        <title>Buy Best Home, Kitchen, Skin & Body care products in India at best price || Apsensys care</title>
        <meta name="description" content="Buy Best Home, Kitchen, Skin & Body care products in India at best price || Apsensys Care" />
      </Helmet>
      <Outlet />
    </div>
  )
}

export default LandingPage;
