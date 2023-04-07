import styled from '@emotion/styled'
import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterCont = styled(Box)`
    width:100%;
    height:350px;
    background-color:#d9d9d9;
    display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media (max-width: 768px) {
  height:auto;
};
`
const FooterBoxCont = styled(Box)`
display:flex;
width:90%;
height:80%;
flex-direction:row;
justify-content:center;
align-items:center;
gap:10px;
color:black;
@media (max-width: 768px) {
    width:90%;
    flex-direction:column;
};
`
const FooterBox = styled(Box)`
width:20%;
height:90%;
display:flex;
flex-direction:column;
justify-content:start;
align-items:start;
padding:8px;
@media (max-width: 768px) {
    width:90%;
    flex-direction:column;
};
`
const FooterIconBox = styled(Box)`
width:53%;
height:90%;
display:flex;
flex-direction:column;
justify-content:spacebetween;
align-items:start;
padding:8px;
gap:4px;
@media (max-width: 768px) {
    width:90%;
    flex-direction:column;
};
`


const FooterTypography = styled(Typography)`
display:flex;
flex-direction:row;
justify-content:start;
align-items:center;
font-size:14px;
cursor:pointer;
margin-bottom:3px;
`
const Footer = () => {
  return (
    <FooterCont>
      <FooterBoxCont>
        <FooterBox style={{width:'35%',marginRight:'15px'}}>
          <Box>
            <img width="200px" height="40px" src='/apsensys technologies-01-01.png' />
          </Box>
          <Box style={{paddingLeft:"10px"}}>
            <Typography variant='h3' style={{ fontSize: '18px' }}>Contact</Typography>
            <br/>
            <Typography variant='body' style={{ fontSize: '14px', height: '100px' }}>
            2M95+8CC, Service Rd, Vijaya Bank Colony, Kallumantapa, Horamavu, Bengaluru, Karnataka 560043
            </Typography>
          </Box>
        </FooterBox>
        <FooterBox >
          <Typography variant='h3' style={{ fontSize: '18px' }}>QUICK LINK</Typography>
          <br/>
          <Box style={{
            fontSize: '14px', height: 'auto', display: 'flex', justifyContent: 'center',
            alignContent: 'center', flexDirection: 'column'
          }}>
            <FooterTypography variant='body'>Ask the Exports</FooterTypography>
            <FooterTypography variant='body'>Blog</FooterTypography>
            <FooterTypography variant='body'>Careers</FooterTypography>
            <FooterTypography variant='body'>FAQs</FooterTypography>
            <FooterTypography variant='body'>Health Help</FooterTypography>
            <FooterTypography variant='body'>Herb Finder</FooterTypography>
            <FooterTypography variant='body'>Loyalty Program</FooterTypography>
            <FooterTypography variant='body'></FooterTypography>
          </Box>
        </FooterBox>
        <FooterBox >
          <Typography variant='h3' style={{ fontSize: '18px' }}>LEGAL</Typography>
          <br />
          <Box style={{
            fontSize: '14px', height: '100px', display: 'flex', justifyContent: 'center',
            alignContent: 'center', flexDirection: 'column'
          }}>
            <FooterTypography variant='body'> Shipping</FooterTypography>

            <FooterTypography variant='body'>Return Policy</FooterTypography>
            <FooterTypography variant='body'>Terms of use</FooterTypography>
            <FooterTypography variant='body'>Privacy Policy</FooterTypography>
          </Box>
        </FooterBox>
        <FooterBox >
          <Typography variant='h3' style={{ fontSize: '18px' }}>HELP</Typography>
          <br />
          <Box style={{
            fontSize: '14px', height: 'auto', display: 'flex', justifyContent: 'center',
            alignContent: 'center', flexDirection: 'column'
          }}>
             <FooterTypography variant='body'>Ask the Exports</FooterTypography>
            <FooterTypography variant='body'>Blog</FooterTypography>
            <FooterTypography variant='body'>Sitemap</FooterTypography>
            <FooterTypography variant='body'>FAQs</FooterTypography>
            <FooterTypography variant='body'>Health Help</FooterTypography>
            <FooterTypography variant='body'>Herb Finder</FooterTypography>
          </Box>
        </FooterBox>
        
      </FooterBoxCont>
    </FooterCont>
  )
}

export default Footer