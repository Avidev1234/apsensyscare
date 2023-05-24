import styled from '@emotion/styled'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useNavigate } from "react-router-dom";
import "./carousal.css"
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../Store/Slices/cartSlice';
// import { productData } from '../../../Store/Slices/productEntrySlice';
const CardImage = styled(CardMedia)`
width:auto;
`
const FevIcon = styled(IconButton)`
position:absolute;
z-index:9;
right:100;
`
const AddtoCart = styled(Button)(() => ({
    backgroundColor: 'orange',
    '&:hover': {
        backgroundColor: 'orange',
    }
}))
const CarouselCard = ({ val }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //console.log(val)
    const products = useSelector((state) => state.productdetails);
    const sizedetails = useSelector((state) => state.size);

    // destructure all data
    const { details } = products.productdetails;
    const { size } = sizedetails.sizes;

    const itemIndex = details !== undefined ? details.findIndex((item) => item.product_id === val.id) : 'null';
    let itemsize = '';

    // if (itemIndex !== -1 && details !== undefined) {
    //     const sizeid = details[itemIndex]['size_id'];
    //     const sizeindex = size !== undefined ? size.findIndex((item) => item.id === sizeid) : 'null';
    //     itemsize = size !== undefined ? size[sizeindex]['size_value'] : null;
    // }


    // handling cart

    const handleCart = (product) => {
        const productDetails = Object.assign({price:product.default_price}, product);
        dispatch(addToCart([productDetails, product.default_size]));
        navigate('/cart')
    }
    
    try {
        const iconcolor = val.color ? val.color : '';
        return (
            <Card style={{ minWidth: '250px', minHeight: '300px' }}>
                <FevIcon aria-label="add to favorites">
                    <FavoriteIcon style={{ color: iconcolor }} />
                </FevIcon>
                <Box style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
                <CardActionArea  style={{backgroundColor:'#D4EBF5'}}
                    onClick={() => navigate(`/product/${val.category_id}/${val.id}/${val.product_url}`, { state: { product:val} })}>
                    <CardImage
                    style={{padding:'10px',height: '150px'}}
                        component="img"
                        height="140px"
                        image={`${process.env.REACT_APP_URL}Image/all_products/${val.product_image}`}
                        alt="green iguana"
                    />
                    <CardContent padding={0} style={{ height: '100px' }}>
                        <Box style={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: '2px' }}>
                            <Typography gutterBottom variant='h3' style={{ fontSize: '14px', fontWeight: '600', color: 'black' }} component="div">
                                {val.name}
                            </Typography>
                            {/* <button style={{ width: '70px', height: 'min-content', border: 'none', backgroundColor: '#62b660', padding: '3px 8px', borderRadius: '20px', float: 'right' }}>
                                {`${itemsize} ml`}
                            </button> */}
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            {val.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <StarIcon fontSize='9px' />
                            <StarIcon fontSize='9px' />
                            <StarIcon fontSize='9px' />
                            <StarIcon fontSize='9px' />
                            <StarIcon fontSize='9px' />
                            {`(4)`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <AddtoCart variant="contained"
                    style={{
                        width: '95%',
                        borderRadius: '5px',
                        textTransform: 'none',
                        marginTop:'7px',
                        border: 'none',
                        color: 'white',
                        padding: '5px 8px',
                        boxShadow:'none'
                    }}
                    onClick={() => handleCart(val)}>
                    Add to cart
                </AddtoCart>
                </Box>
            </Card>
        )
    } catch (err) { }
}

export default CarouselCard