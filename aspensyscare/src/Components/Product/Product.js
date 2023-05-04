import styled from '@emotion/styled'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import RecentViews from '../LandingPage/Carousel/RecentViews'
import CT from './CT'
import ProductCarousel from './ProductCarousel'
import ProductDetails from './ProductDetails'
import Ratingpage from './Ratingpage'
import TopQuestion from './TopQuestion'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { magnifying } from '../../Store/Slices/imagemagnifySlice'


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
  const [magnified, setMagnified] = useState(false)
  const value = useLocation();
   console.log(value.state)
  const imagemagnify = (text) => {
    setMagnified(text);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    try {
      dispatch(magnifying(value.state.id));
    } catch (error) {
      console.log(error);
    }
  }, [value]);
  

  return (
    <ProductCont>
      <ProductDetailsBox>
        <Partationcont>
          <ProductCarousel id={value.state.id} imagemagnify={imagemagnify} />
        </Partationcont>
        <Partationcont>
          <ProductDetails products={value.state} magnified={magnified} />
        </Partationcont>
      </ProductDetailsBox>
      <ProductDetailsBox>
        <Ratingpage />
        {/* <TopQuestion /> */}
      </ProductDetailsBox>
      <Partationcont_sec>
        <RecentViews />
      </Partationcont_sec>
    </ProductCont>
  )
}
export default Product