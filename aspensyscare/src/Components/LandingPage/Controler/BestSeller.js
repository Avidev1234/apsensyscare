import React from 'react'
import Slider from 'react-slick';
import ProductCard from '../ProductCard/ProductCard';
import { useSelector } from 'react-redux';

const BestSeller = ({title,count}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6.1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        swipeToSlide: true,
        arrows: false,
        className: "center gapgiven",
        centerMode: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              }
            }
          ]

    };
    const Products = useSelector((state) => state.product);
    const { product } = Products.products;
  return (
    <>
            <div className="w-full mt-[1rem] flex flex-nowrap flex-col gap-4">
                {title!==undefined?<div className='w-full  font-bold pl-[6px]'>
                    <h1 className='text-bold text-[24px] leading-[40px]'>{title}</h1>
                </div>:null}
                <Slider
                    {...settings}
                >
                    {
                        product !== undefined ? (
                            product.slice(0,count).map((item,idx) => {
                                return (
                                    <ProductCard val={item} />
                                )
                            })
                        ) : null
                    }


                </Slider>
            </div>
        </>
  )
}

export default BestSeller