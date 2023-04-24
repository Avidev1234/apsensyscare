import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const PosterCont = styled(Box)`
width:100%;
height:300px;
margin-top:18px;
display:flex;
padding:20px;
flex-wrap: wrap;
flex-direction: row;
align-content: space-around;
justify-content: center;
align-items: center;
gap:20px;
`
const Poster1 = styled(Box)`
width:46%;
height:100%;
padding:10px;
border-radius:16px;
display:flex;
justify-content: center;
align-items: center;
`
const Poster = () => {
    const banners = useSelector((state) => state.banner);
    const { banner } = banners.banner;
    return (
        <PosterCont>
            <Poster1>
                {banners.loading && <div>Loading...</div>}
                {!banners.loading && banners.error ? <div>Error: {banners.error}</div> : null}
                {!banners.loading && banners.banner.banner !== undefined ? (
                    <img style={{ width: '100%', height: '300px' }} src={`${banner[0].banner_image}`} alt={`${banner[0].alt_name}`} />
                ) : null}
            </Poster1>
            <Poster1>
                {banners.loading && <div>Loading...</div>}
                {!banners.loading && banners.error ? <div>Error: {banners.error}</div> : null}
                {!banners.loading && banners.banner.banner !== undefined ? (
                    <img style={{ width: '100%', height: '300px' }} src={`${banner[0].banner_image}`} alt={`${banner[0].alt_name}`} />
                ) : null}
            </Poster1>
        </PosterCont>
    )
}

export default Poster
