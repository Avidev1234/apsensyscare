import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import CategoryControler from '../CategoryControler/CategoryControler'
import ProductCategory from '../Category/ProductCategory'
import CategorySeller from '../Controler/CategorySeller'
import Banner from '../Banner/Banner'
import BestSeller from '../Controler/BestSeller'
import Advertise from '../Controler/Advertise'
import BrandOfDay from '../Controler/BrandOfDay'
import CategoryInFocus from '../Controler/CategoryInFocus'
import BestCategory from '../Controler/BestCategory'

const Homecont = styled(Stack)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:#d9d9d9
`
const Homebox = styled(Box)`
width:100%;
display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:5px;
  background-color:#fff;
`
const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <Homecont>
      
        <Homebox>
          {/* <VideoComponent/> */}
          <CategorySeller/>
          <Banner position='1'/>
          <BestSeller title={"Best Sellers"} count={15}/>
          <Advertise/>
          <BrandOfDay />
          <BestCategory/>
          <Banner position='2'/>
          <BestSeller title={"More Categories For You"} count={9}/>
          <CategoryInFocus/>
          <Advertise/>
          {/* <ProductCategory />
          <CategoryControler category={"Home"} />
          <CategoryControler category={"Body"} />
          <CategoryControler category={"Skin"} />
          <CategoryControler category={"Kitchen"} /> */}

          {/* <Category />
        <Poster />
        <PopularCarousel />
        <SinglePoster />
        <RecentViews /> */}
        </Homebox>
    </Homecont>
  )
}

export default Home
