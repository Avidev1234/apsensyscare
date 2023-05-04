import styled from '@emotion/styled'
import { Box, Skeleton } from '@mui/material'
import React from 'react'
// Import the Cloudinary classes. 
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';
import { useSelector } from 'react-redux';

const myImage = new CloudinaryImage('sample', {cloudName: 'dvzerjzmg'}).resize(fill().width(100).height(300));
const PosterCont=styled(Box)`
width:100%;
padding:10px;
`
const SinglePoster = () => {
  const banners = useSelector((state) => state.banner);
    const { banner } = banners.banner;
  return (
    <PosterCont >
      {banners.loading && <Skeleton variant="rectangular" animation="wave" width={1430} height={300} />}
      {!banners.loading && banners.error? <div>Error: {banners.error}</div> : null}
      {!banners.loading && banners.banner.banner!==undefined? (
        <img style={{width:'100%',height:'300px',cursor:'pointer'}} src={`./Image/Poster/${banner[3].banner_image}`} alt='Clean_image'/>
      ):null}
    </PosterCont>
  )
}

export default SinglePoster
