import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box, style } from '@mui/system'
import React, { useEffect } from 'react'
import CarouselCard from '../LandingPage/Carousel/CarouselCard'

const WishlistConst=styled(Box)`
    width:100%;
    display:flex;
    justify-content:center;
    margin-top:10px;
`
const CategoryItems = styled(Box)`
width:70%;
display:flex;
flex-direction:row;
flex-wrap:wrap;
padding:10px;
gap:20px;
margin:10px;
`
const val = {
    name: '1',
    color:'#e293dbde'
}
const Wishlist = () => {
    useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <WishlistConst>
    <Typography variant='h2' style={{fontSize:'22px',fontWeight:600}}>Your wishlist</Typography>
        <CategoryItems>
                    <Box style={{ width: '200px' }}>
                        <CarouselCard val={val} />
                    </Box>
                    <Box style={{ width: '200px' }}>
                        <CarouselCard val={val} />
                    </Box>
                    <Box style={{ width: '200px' }}>
                        <CarouselCard val={val} />
                    </Box>
                    <Box style={{ width: '200px' }}>
                        <CarouselCard val={val} />
                    </Box>
                    <Box style={{ width: '200px' }}>
                        <CarouselCard val={val} />
                    </Box>
                    <Box style={{ width: '200px' }}>
                        <CarouselCard val={val} />
                    </Box>
                    <Box style={{ width: '200px' }}>
                        <CarouselCard val={val} />
                    </Box>
                    <Box style={{ width: '200px' }}>
                        <CarouselCard val={val} />
                    </Box>
                    <Box style={{ width: '200px' }}>
                        <CarouselCard val={val} />
                    </Box>
                    <Box style={{ width: '200px' }}>
                        <CarouselCard val={val} />
                    </Box>
                    <Box style={{ width: '200px' }}>
                        <CarouselCard val={val} />
                    </Box>
                    <Box style={{ width: '200px' }}>
                        <CarouselCard val={val} />
                    </Box>
                </CategoryItems>
    </WishlistConst>
  )
}

export default Wishlist
