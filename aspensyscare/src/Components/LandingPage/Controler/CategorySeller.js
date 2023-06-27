import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CategorySeller = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    arrows: false,
    className: "addmargin",
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
          className: 'removegap',
          centerMode: false,
        }
      }
    ]

  };
  const navigate = useNavigate();
  const Category = useSelector((state) => state.category);
  const { category } = Category.category;
  console.log(Category.loading)
  const skeletonarray = [1, 2,]
  return (
    <>
      <div className="w-full flex flex-nowrap flex-col gap-4">
        <div className='w-full  font-bold '>
          <h1 className='text-bold text-[18px] md:text-[24px] leading-[40px]'>Top Sellers</h1>
        </div>
        {Category.loading &&
          (<div className='flex justify-between'>
            {skeletonarray.map(() => {
              return (
                <Skeleton count={1} className='w-[650px] h-[300px]' />
              )
            })}
          </div>
          )
        }
        {!Category.loading && Category.error ? <div>Error: {Category.error}</div> : null}
        <Slider
          {...settings}
        >
          {

            !Category.loading && category !== undefined ? (
              category.map((item, idx) => {
                return (
                  <div className="relative w-[480px] rounded-[10px]" key={idx} >
                    <img className="w-full h-full rounded-[10px]" src={`${process.env.REACT_APP_URL}Image/top-sellers/${item.topsellers}`} alt="" />
                    <div className="absolute bottom-0 flex justify-between w-full bg-gradient-to-b from-[#0000] to-[#000] rounded-[10px] items-end py-4 px-2">
                      <p className="w-[80%] text-white text-[14px] md:text-base"><span className="font-bold">{item.category_name}-</span> Hand Sanitizer
                        in Green Apple,
                        Sandal Wood, Lemon Grass...</p>
                      <button className="py-2 px-2 md:px-4 bg-[#FF983B] text-white text-[14px] rounded-[3px] text-sm md:text-base whitespace-nowrap hover:text-[#FF983B] hover:bg-white border-[#FF983B]"
                        onClick={() => navigate(`/category/${item.category_url}`, { state: { id: item.id, val: item } })}
                      >Shop Now</button>
                    </div>
                  </div>
                )
              })
            ) :
              null


          }


        </Slider>
      </div>
    </>
  )
}

export default CategorySeller