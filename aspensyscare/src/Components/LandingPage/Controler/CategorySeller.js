import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PregressiveImage from '../../layouts/ImageLoader/PregressiveImage';

const CategorySeller = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    arrows: false,
    className: "addmargin",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
        }
      }
    ]

  };
  const navigate = useNavigate();
  const Category = useSelector((state) => state.category);
  const { category } = Category.category;
  const skeletonarray = [1, 2,]

  return (
    <>
      <div className="w-full flex flex-nowrap flex-col gap-4">

        {!Category.loading && category !== undefined ? (<div className='w-full  font-bold '>
          <h2 className='text-bold text-[18px] md:text-[24px] leading-[40px]'>Top Sellers</h2>
        </div>) : <Skeleton count={2} />}
        {Category.loading &&
          (<div className='flex justify-between'>
            {skeletonarray.map((id) => {
              return (
                <Skeleton key={id} count={1} className='w-[650px] h-[280px]' />
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
                  <div className="relative w-[480px] rounded-[10px] cursor-pointer" key={idx}
                    onClick={() => navigate({
                      pathname: `/category/${item.category_url}/c/${item.id}`,
                      search: `?categoryId=${item.id}`
                    })}
                  >
                    {/* <img className="w-full h-[280px] rounded-[10px]" src={`${process.env.REACT_APP_URL}Image/top-sellers/${item.topsellers}`} alt="" /> */}

                    <PregressiveImage imgSrc={`${process.env.REACT_APP_URL}Image/top-sellers/${item.topsellers}`} previewSrc={`${process.env.REACT_APP_URL}Image/top-sellers/${item.topsellers}`} classname={"w-full h-[300px] rounded-[10px]"} />
                    <div className="absolute bottom-0 flex justify-between w-full bg-gradient-to-b from-[#0000] to-[#000] rounded-[10px] items-end py-4 px-2">
                      <p className="w-[80%] text-white text-[14px] md:text-base"><span className="font-bold">{item.category_name}-</span> Hand Sanitizer
                        in Green Apple,
                        Sandal Wood, Lemon Grass...</p>
                      <button className="py-2 px-2 md:px-4 bg-[#FF983B] text-white text-[14px] rounded-[3px] text-sm md:text-base whitespace-nowrap hover:text-[#FF983B] hover:bg-white border-[#FF983B]"
                        onClick={() => navigate({
                          pathname: `/category/${item.category_url}/c/${item.id}`,
                          search: `?categoryId=${item.id}`
                        })}
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