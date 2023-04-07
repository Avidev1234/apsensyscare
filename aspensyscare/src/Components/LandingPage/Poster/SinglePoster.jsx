import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'

const PosterCont=styled(Box)`
width:100%;
padding:10px;
`
const SinglePoster = () => {
  return (
    <PosterCont >
      <img src='./Image/Poster/floor-cleaner.webp' width={'100%'} height={'300px'} alt='poster'/>
    </PosterCont>
  )
}

export default SinglePoster
