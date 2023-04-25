import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'

const HBanner = styled(Box)`
width:100%;
height:300px;
display:flex;
flex-direction:column;
justify-content: space-evenly;
align-items: flex-end;
@media (max-width: 768px) {
    height:230px;
  }
`
// const HomeBannerCont = styled(Box)`
//   width:40%;
//   height:80%;
//   padding:10px;
//   display: flex;
//   flex-direction:column;
//   justify-content: center;
//   align-content: center;
//   align-items: flex-start;
//   gap:10px;
//   @media (max-width: 768px) {
//     width:75%;
//   }
// `



const HomeBanner = () => {
  const banners = useSelector((state) => state.banner);
  const {banner}=banners.banner;
  return (
    <HBanner>
      {/* <HomeBannerCont>
        <Typography variant='h3' style={{ fontSize: '22px', fontWeight: '600' }}>
          <span style={{ color: '#62b660' }}>Welcome</span> to our store!
        </Typography>
        <Typography  style={{ color: 'gray',fontSize: '14px', fontWeight: '600' }}>
          We are dedicated to providing high-quality
          cleaning products that will help you keep your home looking its best,Thank you choosing to shop with us!
        </Typography>
          <Button  variant="contained" style={{borderRadius:'16px',textTransform:'none',backgroundColor:'#62b660'}}>know more</Button>
      </HomeBannerCont> */}

      {banners.loading && <div>Loading...</div>}
      {!banners.loading && banners.error? <div>Error: {banners.error}</div> : null}
      {!banners.loading && banners.banner.banner!==undefined? (
        <img style={{width:'100%',height:'300px'}} src={`./Image/Poster/${banner[0].banner_image}`} alt='Clean_image'/>
      ):null}
      
    </HBanner>
  )
}

export default HomeBanner
