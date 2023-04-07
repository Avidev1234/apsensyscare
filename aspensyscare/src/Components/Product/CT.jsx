import styled from '@emotion/styled'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Slider from 'react-slick'
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactImageMagnify from 'react-image-magnify';

const BoxCont = styled(Box)`
  width:100%;
  height:auto;
  margin-bottom:100px;
  @media (max-width:768px){
    margin-bottom:0px;
}
`
var data = ['./Image/products/yellow-bodywash-with-lime.png', './Image/products/photo_2023-03-20_21-02-47.jpg'
  , './Image/products/photo_2023-03-20_21-02-47.jpg', './Image/products/photo_2023-03-20_21-02-47.jpg',
  './Image/products/photo_2023-03-20_21-02-47.jpg', './Image/products/photo_2023-03-20_21-02-47.jpg'
  , './Image/products/photo_2023-03-20_21-02-47.jpg', './Image/products/photo_2023-03-20_21-02-47.jpg']
const ProductCarousel = (props) => {
  const [nav1, Setnav1] = useState();
  const [nav2, Setnav2] = useState();
  const PreviousBtn = (props) => {
    // console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick} style={{ left: "0px", zIndex: 9 }}>
        <ArrowBackIos style={{ color: "blue", fontSize: "15px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick} style={{ right: "-8px", zIndex: 9 }}>
        <ArrowForwardIos style={{ color: "blue", fontSize: "15px" }} />
      </div>
    );
  };
  return (
    <BoxCont>
      <Slider
        asNavFor={nav2}
        ref={slider => (Setnav1(slider))}

      >
        {data.map((item) => (
          <div style={{
            width: "100%", height: "65vh", objectFit: "contain",
            backgroundColor: "#d9d9d9", borderRadius: "16px"
          }} >
            <ReactImageMagnify {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: false,
                src: item,
                sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
                height:'460'
              },
              largeImage: {
                src: item,
                width: 2100,
                height: 1800
              },
              enlargedImagePortalId: 'portal',
              enlargedImageContainerDimensions: {
                width: '100%',
                height: '100%'
              }
            }}
            />
          </div>
        ))}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={slider => (Setnav2(slider))}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        dotsClass="slick-dots custom-indicator"
      >
        {data.map((item) => (
          <div style={{ width: "100%", height: "10%", margin: "10px" }}>
            <img src={item} alt="" style={{ width: "100%", height: "10vh", objectFit: "contain", cursor: 'pointer' }} />
          </div>
        ))}
      </Slider>
    </BoxCont>
  )
}

export default ProductCarousel
