import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import CarouselCard from './CarouselCard'
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
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

const PreviousBtn = (props) => {
    // console.log(props);
    const { onClick } = props;
    return (
        <div className="slick-prev" onClick={onClick}>
            <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { onClick } = props;
    return (
        <div className="slick-next" onClick={onClick}>
            <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
        </div>
    );
};
const RecentViews = () => {
    const Products = useSelector((state) => state.product);
    const { product } = Products.products;
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
            <div className='w-full lg:w-[93%] flex flex-col md:flex-row flex-wrap justify-center md:justify-start gap-5'>
                {Products.loading && skeletonloading.map((items, idx) => { return (<Skeleton key={idx.toString()} variant="rectangular" animation="wave" width={232} height={270} />) })}
                {!Products.loading && Products.error ? <div>Error: {Products.error}</div> : null}
                {!Products.loading && Products.products.product !== undefined ? (
                    product.slice(0, 5).map((val, i) => {
                        return (
                                <ProductCard val={val} />
                        )
                    })
                ) : null}
            </div>
        </Homecont >
    )
}

export default RecentViews
