import React from 'react'
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

const CategoryInFocus = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6.1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        swipeToSlide: true,
        arrows: false,
        className: "center gapgiven",
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
        <div className="w-full mt-[1rem] flex flex-nowrap flex-col gap-4 mb-[50px]">
            <div className='w-full  font-bold pl-[6px]'>
                <h1 className='text-bold text-[24px] leading-[40px]'>Category In Focus</h1>
            </div>
            <Slider
                {...settings}
            >
                {
                    product !== undefined ? (
                        product.map((item, idx) => {
                            return (
                                <div class="text-center text-gray-600">
                                    <div class="w-full flex justify-center mt-[7rem] md:mt-[15rem]">
                                        <div class="bg-blue-200 w-32 md:w-44 h-12 md:h-12 rounded-[100%] relative shadow-lg">
                                            <img src={`${process.env.REACT_APP_URL}Image/all_products/${item.product_image}`}
                                                class="h-32 md:h-[8rem] lg:h-48 w-44 object-contain absolute bottom-[20px]" alt="" />
                                        </div>
                                    </div>
                                    <div class="text-xl md:text-2xl font-semibold mt-5">Body Wash</div>
                                </div>
                            )
                        })
                    ) : null
                }


            </Slider>
        </div>

    )
}

export default CategoryInFocus