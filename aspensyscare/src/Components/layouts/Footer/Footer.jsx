import styled from '@emotion/styled'
import {   Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

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
    width:100%;
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
font-weight:500;
&:hover {
  color: white;
}
`
const Footer = () => {
  const navigate=useNavigate()
  const Redirect=(text)=>{
    if(text==='privacy')
    {
      navigate('/privacy-policy')
    }else if(text==='contact'){
      navigate('/contact-us')
    }
    else if(text==='about'){
      navigate('/about-us')
    }
    else if(text==='payment-return'){
      navigate('/payment-return-cancellation')
    }
    else if(text==='terms&condition'){
      navigate('/terms-condition')
    }
    else if(text==='shipping'){
      navigate('/shipping')
    }
  }
  return (
    <FooterCont>
      <FooterBoxCont>
      <FooterBox >
          <Typography variant='h3' style={{ fontSize: '18px' }}>PRODUCTS</Typography>
          <br/>
          <div style={{
            fontSize: '14px', height: 'auto', display: 'flex', justifyContent: 'center',
            alignContent: 'center', flexDirection: 'column'
          }}>
            <FooterTypography variant='body'>Home Care</FooterTypography>
            <FooterTypography variant='body'>Skin Care</FooterTypography>
            <FooterTypography variant='body'>Body Care</FooterTypography>
            <FooterTypography variant='body'>Kitchen Care</FooterTypography>
          </div>
        </FooterBox>
        <FooterBox >
          <Typography variant='h3' style={{ fontSize: '18px' }}>QUICK LINK</Typography>
          <br/>
          <div style={{
            fontSize: '14px', height: 'auto', display: 'flex', justifyContent: 'center',
            alignContent: 'center', flexDirection: 'column'
          }}>
            <FooterTypography variant='body' onClick={()=>Redirect('about')}>About Us</FooterTypography>
            <FooterTypography variant='body'>Career</FooterTypography>
            <FooterTypography variant='body' onClick={()=>Redirect('contact')}>Contact Us</FooterTypography>
            <FooterTypography variant='body'>Blog</FooterTypography>
            <FooterTypography variant='body'>Sitemap</FooterTypography>
          </div>
        </FooterBox>
        <FooterBox >
          <Typography variant='h3' style={{ fontSize: '18px' }}>SOCIAL</Typography>
          <br />
          <div style={{
            fontSize: '14px', height: '100px', display: 'flex', justifyContent: 'center',
            alignContent: 'center', flexDirection: 'column'
          }}>
            <a href="https://www.linkedin.com/company/apsensyscare/" target="_blank" rel="noopener noreferrer" style={{color:'black',textDecoration:'none'}}><FooterTypography variant='body'>LinkedIn</FooterTypography></a>
            <a href="https://www.facebook.com/profile.php?id=100085565684892" target="_blank" rel="noopener noreferrer" style={{color:'black',textDecoration:'none'}}><FooterTypography variant='body'>Facebook</FooterTypography></a>
            <a href="https://twitter.com/ApsensysCare" target="_blank" rel="noopener noreferrer"style={{color:'black',textDecoration:'none'}}><FooterTypography variant='body'>Twiter</FooterTypography></a>
            <a href="https://www.youtube.com/channel/UC0QnnIi7jB-Z-W66FHq7hHQ" target="_blank" rel="noopener noreferrer"style={{color:'black',textDecoration:'none'}}><FooterTypography variant='body'>YouTube</FooterTypography></a>
            <a href="https://www.instagram.com/apsensyscaresolution/" target="_blank" rel="noopener noreferrer"style={{color:'black',textDecoration:'none'}}><FooterTypography variant='body'>Instagram</FooterTypography></a>
          </div>
        </FooterBox>
        <FooterBox >
          <Typography variant='h3' style={{ fontSize: '18px' }}>LEGAL POLICY</Typography>
          <br />
          <div style={{
            fontSize: '14px', height: 'auto', display: 'flex', justifyContent: 'center',
            alignContent: 'center', flexDirection: 'column'
          }}>
            <FooterTypography variant='body' onClick={()=>Redirect('terms&condition')}>Terms and condition</FooterTypography>
            <FooterTypography variant='body' onClick={()=>Redirect('privacy')}>Privacy Policy</FooterTypography>
            <FooterTypography variant='body' onClick={()=>Redirect('shipping')}>Shipping Policy</FooterTypography>
            <FooterTypography variant='body' onClick={()=>Redirect('payment-return')}>Payment terms and Return, Cancellation refund and exchange</FooterTypography>
          </div>
        </FooterBox>
        <FooterBox >
          <Typography variant='h3' style={{ fontSize: '18px' }}>MAIL US</Typography>
          <br />
          <div style={{
            fontSize: '14px', height: 'auto', display: 'flex', justifyContent: 'center',
            alignContent: 'center', flexDirection: 'column'
          }}>
             <FooterTypography variant='body'>Apsensys Business Tower</FooterTypography>
            <FooterTypography variant='body'>Service Rd, Vijaya Bank Colony</FooterTypography>
            <FooterTypography variant='body'>Kallumantapa, Horamavu</FooterTypography>
            <FooterTypography variant='body'>Bengaluru, Karnataka 560043</FooterTypography>
            <FooterTypography variant='body'>Tel:-</FooterTypography>
          </div>
        </FooterBox>
      </FooterBoxCont>
    </FooterCont>
  )
}

export default Footer