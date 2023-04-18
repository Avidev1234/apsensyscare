import styled from '@emotion/styled'
import { Button, Card, CardActionArea, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useNavigate } from "react-router-dom";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const CardImage = styled(CardMedia)`
width:auto;
margin-left: 38%;
`
const FevIcon = styled(IconButton)`
position:absolute;
z-index:9;
right:100;
`

const CarouselCard = ({val}) => {
    const navigate=useNavigate();
    //console.log(val)
    try{
        const iconcolor=val.color?val.color:'';
    return (
        <Card >
            <FevIcon aria-label="add to favorites">
                <FavoriteIcon style={{color:iconcolor}}/>
            </FevIcon>
            <CardActionArea onClick={()=>navigate('/product')}>
                <CardImage
                    component="img"
                    height="140px"
                    image="./Image/products/dishwash-gel 500ml.png"
                    alt="green iguana"
                />

                <CardContent padding={0}>
                    <Typography gutterBottom variant='h3' style={{ fontSize: '16px', fontWeight: '600', color: 'black' }} component="div">
                        {val.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        product description
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                            <StarIcon fontSize='9px'/>
                            <StarIcon fontSize='9px'/>
                            <StarIcon fontSize='9px'/>
                            <StarIcon fontSize='9px'/>
                            <StarIcon fontSize='9px'/>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Button  variant="outlined" 
                    style={{
                        width:'95%',
                        borderRadius:'16px',
                        textTransform:'none',
                        textTransform:'none',
                        margin:'5px',
                        border:'2px solid #62b660',
                        color:'#62b660',
                        padding:'5px 8px'
                        }}>Add to cart</Button>
        </Card>
    )
    }catch(err){}
}

export default CarouselCard
