import styled from '@emotion/styled'
import { Divider, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect } from 'react'
import RecentViews from '../LandingPage/Carousel/RecentViews'
import CT from './CT'
import ProductCarousel from './ProductCarousel'
import ProductDetails from './ProductDetails'
import Rating from './Rating'
import TopQuestion from './TopQuestion'
import { useLocation } from 'react-router-dom'


const ProductCont = styled(Stack)`
    width:97vw;
    height:auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-top:20px;
    @media (min-width:1440px){
      width:auto;
    }
`
const ProductDetailsBox = styled(Box)`
    width:90%;
    height:auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items:  flex-start;
    gap:60px;
    @media (max-width: 768px) {
    flex-direction:column;
    gap:0px;
};
`
const Partationcont = styled(Box)`
width:530px;
height:100%;
@media (max-width:768px){
  width:100%;
  padding:10px;
}
`
const Partationcont_sec = styled(Box)`
 width:100%;
`

const Product = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  const value = useLocation();
  // console.log(value.state)
  return (
    <ProductCont>
      <ProductDetailsBox>
        <Partationcont>
          <ProductCarousel image={value.state.image} />
        </Partationcont>
        <Partationcont>
          <ProductDetails products={value.state} />
        </Partationcont>
      </ProductDetailsBox>
      <ProductDetailsBox>
        <Rating />
        <TopQuestion />
      </ProductDetailsBox>
      <Partationcont_sec>
        <RecentViews />
      </Partationcont_sec>
    </ProductCont>
  )
}
export default Product