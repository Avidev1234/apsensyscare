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
const CarouselCard = ({ val }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(val.id)
    const products = useSelector((state) => state.productdetails);
    const sizedetails = useSelector((state) => state.size);

    // destructure all data
    const {details}=products.productdetails;
    const {size}=sizedetails.sizes;

    const itemIndex = details!==undefined?details.findIndex((item) => item.product_id === val.id):'null';
    let itemsize='';

    if(itemIndex!==-1 && details!==undefined){
        const sizeid=details[itemIndex]['size_id'];
        const  sizeindex = size!==undefined ? size.findIndex((item) => item.id === sizeid):'null';
        itemsize= size!==undefined ?size[sizeindex]['size_value']:null;
    }


    // handling cart

    const handleCart=(product)=>{
        dispatch(addToCart([product,itemsize]));
        navigate('/cart')
    }
    try {
        const iconcolor = val.color ? val.color : '';
        return (
            <Card style={{minWidth:'200px'}}>
                <FevIcon aria-label="add to favorites">
                    <FavoriteIcon style={{ color: iconcolor }} />
                </FevIcon>
                <CardActionArea onClick={() => navigate('/product', { state: { id: val.id } })}>
                    <CardImage
                        component="img"
                        height="140px"
                        image={`./Image/all_products/${val.product_image}`}
                        alt="green iguana"
                    />
                    <CardContent padding={0}>
                        <Box style={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: '2px' }}>
                            <Typography gutterBottom variant='h3' style={{ fontSize: '14px', fontWeight: '600', color: 'black' }} component="div">
                                {val.name}
                            </Typography>
                            <button style={{ width: '70px', height: 'min-content', border: 'none', backgroundColor: '#62b660', padding: '3px 8px', borderRadius: '20px', float: 'right' }}>
                                {`${itemsize} ml`}
                            </button>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            product description
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
                <Button variant="outlined"
                    style={{
                        width: '95%',
                        borderRadius: '16px',
                        textTransform: 'none',
                        textTransform: 'none',
                        margin: '5px',
                        border: '2px solid #62b660',
                        color: '#62b660',
                        padding: '5px 8px'
                    }}
                    onClick={()=>handleCart(val)}
                    >Add to cart</Button>
            </Card>
        )
    } catch (err) { }
}

export default CarouselCard
