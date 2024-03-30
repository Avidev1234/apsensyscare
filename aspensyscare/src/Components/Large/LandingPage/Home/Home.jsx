// import styled from '@emotion/styled'
// import { Stack } from '@mui/material'
// import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import CategorySeller from '../Controler/CategorySeller'
import Banner from '../../../Common/Banner'
import BestSeller from '../Controler/BestSeller'
import Advertise from '../Controler/Advertise'
import BrandOfDay from '../Controler/BrandOfDay'
import CategoryInFocus from '../Controler/CategoryInFocus'
import BestCategory from '../Controler/BestCategory' 
import BrandsOffer from '../Controler/BrandsOffer'


const Home = () => {
  useEffect(() => { 
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
    
  return (
    <div className='w-full flex flex-col justify-center items-center bg-[#d9d9d9]'>
        <div className='w-full flex flex-col justify-center items-center p-[5px] bg-[#fff]'>
          <Advertise/>
          <CategorySeller/>
          <Banner position='1' Header={true}/>
          <BestSeller title={"Best Sellers"} count={true}/>
          <BrandsOffer  title={"Top Brands"}/>
          <BrandOfDay />
          <BestCategory/>
          <Banner position='2' Header={false}/>
          <BrandsOffer  title={"Featured Brands"}/>
          <BestSeller title={"More Categories For You"} count={false}/>
          <CategoryInFocus/>
          <Advertise/>
        </div>
    </div>
  )
}

export default Home
