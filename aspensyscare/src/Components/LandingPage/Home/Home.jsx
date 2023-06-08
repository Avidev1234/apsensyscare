import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import HomeBanner from '../Banner/HomeBanner'
import PopularCarousel from '../Carousel/PopularCarousel'
import Category from '../Category/Category'
import Poster from '../Poster/Poster'
import SinglePoster from '../Poster/SinglePoster'
import RecentViews from '../Carousel/RecentViews'
import CategoryControler from '../CategoryControler/CategoryControler'
import ProductCategory from '../Category/ProductCategory'
import VideoComponent from '../VideoComponent/VideoComponent'

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
  background-color:#fff
`
const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <Homecont>
      <Homebox>
        <VideoComponent/>
        <ProductCategory/>
        <CategoryControler category={"Home"} />
        <CategoryControler category={"Body"} />
        <CategoryControler category={"Skin"} />
        <CategoryControler category={"Kitchen"} />
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
