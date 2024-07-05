import React from 'react'
import Slider from 'react-slick';
import ProductCard from '../ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BestSeller = ({ title, count }) => { 
  const skeletonarray = [1, 2, 3, 4, 5, 6]
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    arrows: false,
    className: "center gapgiven",
    centerMode: false,
    // cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      }
    ]

  };
  const Products = useSelector((state) => state.product);
  const { product } = Products.products;
  let Descending;
  if (count === false) {
    Descending = product !== undefined ? [...product].sort((a, b) => b.id - a.id) : [];
  } else {
    Descending = product !== undefined ? product : [];
  }


  return (
    <>
      <div className="w-full mt-[1rem] flex flex-nowrap flex-col gap-4">
        {title !== undefined ? <div className='w-full  font-bold pl-[8px]'>
          {!Products.loading && product !== undefined ? (<h2 className='text-bold text-[18px] md:text-[24px] leading-[40px] item-center'>{title}</h2>) : <Skeleton count={2} />}

        </div> : null}
        {Products.loading &&
          (<div className='flex justify-between'>
            {skeletonarray.map((id) => {
              return (
                <Skeleton key={id} count={1} className='w-[200px] h-[300px]' />
              )
            })}
          </div>
          )
        }
        {!Products.loading && Products.error ? <div>Error: {Products.error}</div> : null}
        <div className="slider-container">
          <Slider
            {...settings}
          >
            {
              !Products.loading && product !== undefined ? (
                Descending.map((item, idx) => {
                  return (
                    <ProductCard key={idx} val={item} /> 
                  )
                })
              ) : null
            }


          </Slider>
        </div>
      </div>
    </>
  )
}

export default BestSeller