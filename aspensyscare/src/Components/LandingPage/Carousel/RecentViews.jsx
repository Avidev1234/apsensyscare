import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import CarouselCard from './CarouselCard'
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import "./style.css"

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
const val = {
    name: '1'
}


const PreviousBtn = (props) => {
    // console.log(props);
    const { className, onClick } = props;
    return (
      <div className="slick-prev" onClick={onClick}>
        <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className="slick-next" onClick={onClick}>
        <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
      </div>
    );
  };
const RecentViews = () => {
    var settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <Homecont width={'100%'}>
            <Box padding={'20px'} width={'93%'}>
                <Typography variant='h3' style={{ fontSize: '20px', fontWeight: '600', color: 'black' }}>Recently Viewed</Typography>
            </Box>

            <CarouselCont width={'93%'}>
                <Slider className="center"
                    prevArrow={<PreviousBtn />}
                    nextArrow={<NextBtn />}
                    {...settings}
                >
                    <Stack gap={5} style={{ width: '240px'}}><CarouselCard val={val} /></Stack>
                    <Stack gap={5} style={{ width: '240px'}}><CarouselCard val={val} /></Stack>
                    <Stack gap={5} style={{ width: '240px'}}><CarouselCard val={val} /></Stack>
                    <Stack gap={5} style={{ width: '240px'}}><CarouselCard val={val} /></Stack>
                    <Stack gap={5} style={{ width: '240px'}}><CarouselCard val={val} /></Stack>
                    <Stack gap={5} style={{ width: '240px'}}><CarouselCard val={val} /></Stack>
                    <Stack gap={5} style={{ width: '240px'}}><CarouselCard val={val} /></Stack>
                </Slider>
            </CarouselCont>
        </Homecont>
    )
}

export default RecentViews
