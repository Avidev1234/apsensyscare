import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'

const PosterCont = styled(Box)`
width:100%;
height:30vw;
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
background-color:#a3c380;
height:100%;
padding:10px;
border-radius:16px;
display:flex;
justify-content: center;
align-items: center;
`
const Poster = () => {
    return (
        <PosterCont>
            <Poster1>
                <Typography variant='h3' fontSize={'19px'} fontWeight={700}>Poster1</Typography>
            </Poster1>
            <Poster1 style={{ backgroundColor: 'ButtonFace' }}>
                <Typography variant='h3' fontSize={'19px'} fontWeight={700}>Poster2</Typography>
            </Poster1>
        </PosterCont>
    )
}

export default Poster
