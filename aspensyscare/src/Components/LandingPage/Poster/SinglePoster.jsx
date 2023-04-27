import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
// Import the Cloudinary classes. 
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';

const myImage = new CloudinaryImage('sample', {cloudName: 'dvzerjzmg'}).resize(fill().width(100).height(300));
const PosterCont=styled(Box)`
width:100%;
padding:10px;
`
const SinglePoster = () => {
  return (
    <PosterCont >
      <img src='https://res.cloudinary.com/dvzerjzmg/image/upload/v1682504860/Deep-Cleaning_wmubam.jpg' width={'100%'} height={'300px'} alt='poster'/>
    </PosterCont>
  )
}

export default SinglePoster
