import styled from '@emotion/styled'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import RecentViews from '../LandingPage/Carousel/RecentViews'
import ProductCarousel from './ProductCarousel'
import ProductDetails from './ProductDetails'
import Ratingpage from './Ratingpage'
import {  useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { magnifying } from '../../Api/Api'


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
    justify-content: flex-start;
    align-items:  flex-start;
    gap:60px;
    @media (max-width: 450px) {
    flex-direction:column;
    gap:0px;
};
`

const PartationcontSec = styled(Box)`
 width:100%;
`

const Product = () => {
  const [magnified, setMagnified] = useState(false)
  const { product_id } = useParams()
  const Products = useSelector((state) => state.product);
  const { product } = Products.products;
  const itemIndex = product !== undefined ? product.findIndex((product) => product.id === product_id) : null;
  const imagemagnify = (text) => {
    setMagnified(text);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    try {
      dispatch(magnifying(product[itemIndex].id));
    } catch (error) {
      console.log(error);
    }
  });

  sessionStorage.setItem("initialized", true);

  return (
    <ProductCont>
      <ProductDetailsBox>
        <div className='w-full md:w-[44%] '>
          {itemIndex !== null ?
            <ProductCarousel id={product[itemIndex].id} imagemagnify={imagemagnify} />
            : null}

        </div>
        <div className='w-full md:w-[44%] '>
          {itemIndex !== null ?
            <ProductDetails products={product[itemIndex]} magnified={magnified} />
            : null}
        </div>
      </ProductDetailsBox>
      <ProductDetailsBox>
        <Ratingpage />
        {/* <TopQuestion /> */}
      </ProductDetailsBox>
      <PartationcontSec>
        <RecentViews />
      </PartationcontSec>
    </ProductCont>
  )
}
export default Product