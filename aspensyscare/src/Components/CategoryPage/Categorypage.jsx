import styled from '@emotion/styled'
import { CardContent, Collapse, Divider, IconButton, Slider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import CarouselCard from '../LandingPage/Carousel/CarouselCard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import {Helmet} from "react-helmet";

const CategoryBox = styled(Box)`
width:100%;
display:flex;
flex-direction:column;
margin-top:20px;
`
const Categorycont = styled(Box)`
width:100%;
display:flex;
flex-direction:row;
`
const CategoryType = styled(Box)`
width:25%;
display:flex;
flex-direction:column;
align-items:flex-end;
padding:10px;
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
    name: '1'
}
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',

}));
const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#52af77',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});

const skeletonloading = [1, 2, 3, 4, 5, 6, 7, 8];
const Categorypage = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    const value = useLocation();
    console.log(value.state.id)
    localStorage.setItem("cartId", JSON.stringify(value.state.id));
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // fatching products regarding category id
    const Products = useSelector((state) => state.product);
    const { product } = Products.products;
    console.log(product)
    let categoryProducts = [];
    product !== undefined && product.map((val, i) => {
        if (val.category_id === value.state.id) {
            categoryProducts.push(val);
        }
        return true;
    })
    // console.log(categoryProducts)
    return (
        <CategoryBox>
            <Helmet>
                <title>My Title</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Typography variant='h3' style={{ fontSize: '20px', fontWeight: '600', color: 'black', marginLeft: '43px' }}>
                {value.state.name}
            </Typography>
            {Products.loading && <div>Loading...</div>}
            {!Products.loading && Products.error ? <div>Error: {Products.error}</div> : null}
            <Categorycont>
                <CategoryType>
                    <div style={{ width: '70%' }}>
                        <div style={{ width: '100%', borderBottom: '2px solid grey' }}>
                            <Typography style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={handleExpandClick}>
                                Price
                                <ExpandMore
                                    expand={expanded}

                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </Typography>
                        </div>
                        <Collapse in={expanded} timeout="auto" unmountOnExit
                            style={{ width: '100%' }}>
                            <CardContent
                                style={{ width: '100%', marginTop: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 0 }}>
                                {/* enter need to arrange */}
                                <PrettoSlider
                                    valueLabelDisplay="auto"
                                    aria-label="pretto slider"
                                    defaultValue={20}
                                />
                            </CardContent>
                        </Collapse>
                    </div>
                    <Divider />
                </CategoryType>
                <CategoryItems>
                    {!Products.loading && Products.products.product !== undefined && categoryProducts.length !== 0 ? (
                        categoryProducts.map((val, i) => {
                            return (
                                <div style={{ width: '232px' }} key={i.toString()}>
                                    <CarouselCard val={val} />
                                </div>
                            )
                        })
                    ) :
                        <Box style={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant='h1' style={{ fontSize: '20px', fontWeight: '600', color: 'red' }}>No Products.</Typography>
                        </Box>
                    }
                </CategoryItems>
            </Categorycont>
        </CategoryBox>

    )
}

export default Categorypage
