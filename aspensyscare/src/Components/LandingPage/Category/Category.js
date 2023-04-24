import styled from '@emotion/styled'
import { Box, Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
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
const products = []
const Category = () => {
    const navigate = useNavigate();
    const categories = useSelector((state) => state.category);
    const { category } = categories.category;
    return (
        <Stack width={'100%'}>
            <Box padding={'20px'} width={'80%'}>
                <Typography variant='h3' style={{ fontSize: '20px', fontWeight: '600', color: 'black', marginLeft: '43px' }}>Shop by Our Categories</Typography>
            </Box>
            <CardCont >
                {categories.loading && <div>Loading...</div>}
                {!categories.loading && categories.error ? <div>Error: {categories.error}</div> : null}
                {!categories.loading && categories.category.category!==undefined ? (
                        category.map((val, key) => {
                            return (
                                <Card style={{ width: '200px', height: '200px', backgroundColor: '#62b660', cursor: 'pointer' }}
                                    key={key}
                                >
                                    <CardActionArea onClick={() => navigate('/category', { state: { name: val.name } })}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14, display: 'flex', justifyContent: 'center' }} color="white" gutterBottom>
                                                {val.category_name}
                                            </Typography>
                                            <img alt='' style={{ width: '170px', height: '150px' }} src={`./Image/category/${val.category_img}`} />
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            )
                        })
                ) : null}






                


            </CardCont>
        </Stack>
    )
}

export default Category
