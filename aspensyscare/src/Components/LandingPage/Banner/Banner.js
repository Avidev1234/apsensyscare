import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

const Banner = ({ position,Header=true }) => {
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
        className: "center manageHeight",
        centerMode: false,

    };
    const navigate = useNavigate();
    const Banner = useSelector((state) => state.banner);
    const { banner } = Banner.banner;
    console.log(banner)
    const itemIndex = banner !== undefined ? banner.findIndex((item) => item.position === position) : null;
    console.log(itemIndex)
    const bannerImages = banner !== undefined && itemIndex !== null ? banner[itemIndex].banner_image : null
    const bannerImage = bannerImages !== null && bannerImages.split("@@@")
    console.log(bannerImage)

    return (
        <div className="w-full mt-[1rem] flex flex-nowrap flex-col gap-4 max-h-[500px]">
            {Header===true?<div className='w-full  font-bold pl-[6px]'>
                <h1 className='text-bold text-[24px] leading-[40px]'>Welcome to the Apsensyscare Family</h1>
            </div>:null}
            <Slider
                {...settings}
            >
                {
                    banner !== undefined ? (
                        bannerImage.map((item, idx) => {
                            return (
                                <div className='mr-[10px] rounded-[10px]' key={idx}>
                                    <img className='w-full h-full rounded-[10px] ' src={`${process.env.REACT_APP_URL}Image/Poster/${item}`} alt='' />
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