import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-multi-carousel'
import CarouselCard from './CarouselCard'
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
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
const val={
    name:'1'
}
const RecentViews = () => {
    return (
        <Homecont width={'100%'}>
            <Box padding={'20px'} width={'93%'}>
                <Typography variant='h3' style={{ fontSize: '20px', fontWeight: '600', color: 'black' }}>Recently Viewed</Typography>
            </Box>
            <CarouselCont width={'93%'}>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
                    autoPlay={false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    itemClass="carousel-item-padding-40-px"
                    margin={'15px'}
                >
                    <Stack gap={5} style={{ width: '250px' }}><CarouselCard val={val}/></Stack>
                    <Stack gap={5} style={{ width: '250px' }}><CarouselCard val={val}/></Stack>
                    <Stack gap={5} style={{ width: '250px' }}><CarouselCard val={val}/></Stack>
                    <Stack gap={5} style={{ width: '250px' }}><CarouselCard val={val}/></Stack>
                    <Stack gap={5} style={{ width: '250px' }}><CarouselCard val={val}/></Stack>
                    <Stack gap={5} style={{ width: '250px' }}><CarouselCard val={val}/></Stack>
                    <Stack gap={5} style={{ width: '250px' }}><CarouselCard val={val}/></Stack>
                </Carousel>
            </CarouselCont>
        </Homecont>
    )
}

export default RecentViews
