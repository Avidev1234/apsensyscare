import styled from '@emotion/styled'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Slider from 'react-slick'
 import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactImageMagnify from 'react-image-magnify';
import { useSelector } from 'react-redux'

const BoxCont = styled(Box)`
  width:100%;
  height:auto;
  margin-bottom:100px;
  @media (max-width:768px){
    margin-bottom:0px;
}
`
// var data = [
//   './Image/all_products/carousel-230-460/floor-cleaner-floral-500ml-2.png',
//   './Image/all_products/carousel-230-460/bodywash-aloevera-with-neem-2.png'
//   , './Image/all_products/carousel-230-460/bodywash-aloevera-with-neem-3.png'
// ]
// var data1=[
//   './Image/all_products/carousel-100-100/bodywash-aloevera-with-neem-4.png',
//   './Image/all_products/carousel-100-100/bodywash-aloevera-with-neem-5.png'
//   , './Image/all_products/carousel-100-100/bodywash-aloevera-with-neem-6.png'
// ]
// var data2=[
//   './Image/all_products/carousel-1200-1800/bodywash-firangi-pani-glycerine-1.png',
//   './Image/all_products/carousel-1200-1800/bodywash-firangi-pani-glycerine-2.png'
//   , './Image/all_products/carousel-1200-1800/bodywash-firangi-pani-glycerine-3.png'
// ]
const ProductCarousel = ({imagemagnify,id}) => {
  //console.log(id)
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


  // let ProductImage = `./Image/all_products/${image.image}`;

  // console.log(ProductImage) boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)',

  const allimage = useSelector((state) => state.imagemagnify);
  const {images}=allimage.images;
  let data=images!==undefined ? images[0].image_230.split('@@@'):[];
  let data1=images!==undefined ? images[0].image_100.split('@@@'):[];
  let data2=images!==undefined ? images[0].image_1200.split('@@@'):[];
  //console.log(images)
  return (
    <BoxCont>
      <Box style={{marginBottom: '15px',backgroundColor:'#D4EBF5',borderRadius:'20px'}}>
        <Slider
          asNavFor={nav2}
          ref={slider => (Setnav1(slider))}
          arrows={false}
        >
          {data.map((item,idx) => (
            <Box style={{ width: 'auto', height: '450px'}} onMouseEnter={() => imagemagnify(true)}
            onMouseLeave={() => imagemagnify(false)} key={idx.toString()}>
              <ReactImageMagnify {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: false,
                  src: `Image/all_products/carousel-230-460/${item}`,
                  height: 460,
                  width: 250,
                  sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                },
                largeImage: {
                  src: `Image/all_products/carousel-1200-1800/${data2[idx]}`,
                  width: 1000,
                  height: 1800
                },
                enlargedImagePortalId: 'portal',
                enlargedImageContainerDimensions: {
                  width: '250%',
                  height: '105%',
                },
                shouldUsePositiveSpaceLens: true
              }}
              />
            </Box>
          ))}
          
        </Slider>
      </Box>

      <Slider
        asNavFor={nav1}
        ref={slider => (Setnav2(slider))}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        dotsClass="slick-dots custom-indicator"
      >
        {data1.map((item,idx) => (
          <div style={{ width: "100%", height: "10%", margin: "10px" }} key={idx.toString()}>
            <img src={`Image/all_products/carousel-100-100/${item}`} alt="" style={{ width: "100", height: "10vh", cursor: 'pointer',margin:'auto',padding:'10px' }} />
          </div>
        ))}
      </Slider>
    </BoxCont>
  )
}

export default ProductCarousel