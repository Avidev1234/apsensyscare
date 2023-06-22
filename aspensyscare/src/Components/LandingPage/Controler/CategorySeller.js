import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";

const CategorySeller = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.154,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        swipeToSlide: true,
        arrows: false,
        className: "center gapgiven",
        centerMode: true,

    };
    const navigate = useNavigate();
    const Category = useSelector((state) => state.category);
    const { category } = Category.category;
    return (
        <>
            <div className="w-full mt-[1rem] flex flex-nowrap flex-col gap-4">
                <div className='w-full  font-bold pl-[6px]'>
                    <h1 className='text-bold text-[24px] leading-[40px]'>Top Sellers</h1>
                </div>
                <Slider
                    {...settings}
                >
                    {
                        category !== undefined ? (
                            category.map((item,idx) => {
                                return (
                                    <div className="relative w-[480px] rounded-[10px]" key={idx}>
                                        <img className="w-full h-full rounded-[10px]" src={`${process.env.REACT_APP_URL}Image/top-sellers/${item.topsellers}`} alt="" />
                                        <div className="absolute bottom-0 flex justify-between items-center w-full bg-gradient-to-b from-[#0000] to-[#000] p-2 rounded-[10px]">
                                            <p className="w-[70%] text-white"><span className="font-bold">{item.category_name}-</span> Hand Sanitizer
                                                in Green Apple,
                                                Sandal Wood, Lemon Grass...</p>
                                            <button className="h-[25px] px-[5px] bg-[#FF983B] text-white text-[14px] rounded-[3px]">Shop Now</button>
                                        </div>
                                    </div>
                                )
                            })
                        ) : null
                    }


                </Slider>
            </div>
        </>
    )
}

export default CategorySeller