import styled from '@emotion/styled'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { Box } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
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

const ProductCarousel = ({ imagemagnify, id }) => {
  //console.log(id)
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
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
  const { images } = allimage.images;
  let data = images !== undefined ? images[0].image_230.split('@@@') : [];
  let data1 = images !== undefined ? images[0].image_100.split('@@@') : [];
  let data2 = images !== undefined ? images[0].image_1200.split('@@@') : [];
  //console.log(images)
  return (
    <BoxCont>
      <Box style={{ marginBottom: '15px', backgroundColor: '#D4EBF5', borderRadius: '20px' }} className="relative">
        <div className="absolute top-3 right-3 group cursor-pointer z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:opacity-70 " fill="none"
            viewBox="0 0 24 24" stroke="#fff">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <Slider
          asNavFor={nav2}
          ref={slider => (sliderRef1 = slider)} 
          arrows={false}
          infinite={true}
          className='Makecenter'
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          initialSlide='0'
        >
          {data.map((item, idx) => (
            <Box style={{ width: '450px', height: '450px' }} onMouseEnter={() => imagemagnify(true)}
              onMouseLeave={() => imagemagnify(false)} key={idx} id={idx}>
              
              <ReactImageMagnify {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  
                  src: `${process.env.REACT_APP_IMAGE}/all_products/carousel-230-460/${item}`,
                }, 
                largeImage: {
                  src: `${process.env.REACT_APP_IMAGE}/all_products/carousel-1200-1800/${data2[idx]}`,
                  width: 700,
                  height: 1000
                },
                enlargedImagePortalId: 'portal',
                enlargedImageContainerDimensions: {
                  width: idx < 2 ? `260%` : '240%',
                  height: '100%',
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
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={3}
        arrows={false}
        swipeToSlide={true}
        focusOnSelect={true} 
        infinite={true}
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        dotsClass="slick-dots custom-indicator"
        className="Gap"
        initialSlide='0'
      >
        {data1.map((item, idx) => (
          <div style={{ width: "100%", height: "10%", margin: "20px" }} key={idx}>
            <img src={`${process.env.REACT_APP_IMAGE}/all_products/carousel-100-100/${item}`} alt="" style={{ width: "100", height: "10vh", cursor: 'pointer', margin: 'auto', padding: '10px', minHeight: '65px' }} />
          </div>
        ))}
      </Slider>
    </BoxCont>
  )
}

export default ProductCarousel