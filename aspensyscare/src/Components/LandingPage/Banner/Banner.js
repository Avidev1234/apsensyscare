import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

const Banner = ({ position,Header }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        swipeToSlide: true,
        arrows: false,
        className: Header===true?"gapgiventoBanner":"addmargin",
        centerMode: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                className:'removegap'
              }
            }
          ]

    };
    const navigate = useNavigate();
    const Banner = useSelector((state) => state.banner);
    const { banner } = Banner.banner;
    // console.log(banner)
    const itemIndex = banner !== undefined ? banner.findIndex((item) => item.position === position) : null;
    // console.log(itemIndex)
    const bannerImages = banner !== undefined && itemIndex !== null ? banner[itemIndex].banner_image : null
    const bannerImage = bannerImages !== null && bannerImages.split("@@@")
    // console.log(bannerImage)

    return (
        <div className="w-full mt-[1rem] flex flex-nowrap flex-col gap-4 max-h-[500px]">
            {Header===true?<div className='w-full my-[10px] md:my-[30px] font-bold pl-[6px]'>
                <h1 className='text-bold text-[18px] md:text-[24px] leading-[40px]'>Welcome to the Apsensyscare Family</h1>
            </div>:null}
            <Slider
                {...settings}
            >
                {
                    banner !== undefined ? (
                        bannerImage.map((item, idx) => {
                            return (
                                <div className='rounded-[10px] ' key={idx}>
                                    <img className='w-full h-full rounded-[10px] object-contain' src={`${process.env.REACT_APP_URL}Image/Poster/${item}`} alt='' />
                                </div>
                            )

                        })
                    ) : null
                }
            </Slider>


        </div>
    )
}

export default Banner