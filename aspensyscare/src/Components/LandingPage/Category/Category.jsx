import styled from '@emotion/styled'
import { Box, Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const CardCont = styled(Box)`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap:15px;
    
`
const products = [
    {
        name: 'Home care',
        image: './Image/floor-cleaner.png',
        URL:'home-care'
    },
    {
        name: 'Kitchen care',
        image: './Image/kitchen-care.png',
    },
    {
        name: 'Body care',
        image: './Image/body-care-removebg-preview.png',
    },
    {
        name: 'Skin care',
        image: './Image/handwash.webp',
    },
    {
        name: 'Hair care',
        image: './Image/haircare.png',
    }
];
const Category = () => {
    const navigate=useNavigate();
    return (
        <Stack width={'100%'}>
            <Box padding={'20px'} width={'80%'}>
                <Typography variant='h3' style={{ fontSize: '20px', fontWeight: '600', color: 'black',marginLeft:'43px' }}>Shop by Our Categories</Typography>
            </Box>
            <CardCont >
                {
                    products.map((val, key) => {
                        return (
                            <Card style={{ width: '200px', height: '200px', backgroundColor: '#62b660', cursor: 'pointer' }}
                                key={key}
                            >
                                <CardActionArea onClick={()=>navigate('/category/${}',{state:{name:val.name}})}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14, display: 'flex', justifyContent: 'center' }} color="white" gutterBottom>
                                            {val.name}
                                        </Typography>
                                        <img alt='' style={{ width: '170px', height: '150px' }} src={`${val.image}`} />
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        )
                    })
                }


            </CardCont>
        </Stack>
    )
}

export default Category
