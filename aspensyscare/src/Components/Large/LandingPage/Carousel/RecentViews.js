import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import "./style.css"
import { useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import ProductCard from '../ProductCard/ProductCard';

const CarouselCont = styled(Box)`
    width:85%;
    height:auto;
    padding:35px;
  `
const Homecont = styled(Stack)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:10px;
`

const skeletonloading = [1, 2, 3, 4];

const RecentViews = () => {
    const Products = useSelector((state) => state.product);
    const { product } = Products.products;
   
    return (
        <Homecont width={'100%'}>
            <Box padding={'20px'} width={'93%'}>
                <Typography variant='h3' style={{ fontSize: '20px', fontWeight: '600', color: 'black' }}>You might be interested in</Typography>
            </Box>
            <div className='w-full md:w-[90%] flex flex-col md:flex-row flex-wrap justify-center items-center md:justify-start gap-5'>
                {Products.loading && skeletonloading.map((items, idx) => { return (<Skeleton key={idx.toString()} variant="rectangular" animation="wave" width={232} height={270} />) })}
                {!Products.loading && Products.error ? <div>Error: {Products.error}</div> : null}
                {!Products.loading && Products.products.product !== undefined ? (
                    product.slice(0, 5).map((val, i) => {
                        return (
                                <ProductCard val={val} page={"re"} key={i}/>
                        )
                    })
                    
                ) : null}
            </div>
        </Homecont >
    )
}

export default RecentViews
