import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CategoryInFocus = () => {
  const skeletonarray = [1, 2, 3, 4, 5, 6]
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6.1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
  const navigate = useNavigate();
  return (
    <div className="w-full mt-[1rem] mb-[30px] flex flex-nowrap flex-col gap-4">
      {!Products.loading && product !== undefined ? ( <div className='w-full  font-bold pl-[8px] '>
        <h2 className='text-bold text-2xl md:text-[24px] leading-[40px]'>Category In Focus</h2>
      </div>) : <Skeleton count={2} />}
     
      {Products.loading &&
        (<div className='flex justify-between'>
          {skeletonarray.map((id) => {
            return (
              <Skeleton count={1} key={id} className='w-[200px] h-[300px]' />
            )
          })}
        </div>
        )
      }
      {!Products.loading && Products.error ? <div>Error: {Products.error}</div> : null}
      <Slider
        {...settings}
      >
        {
        !Products.loading && product !== undefined ? (
            product.map((item, idx) => {
              return (
                <div key={idx} class="text-center text-gray-600 cursor-pointer"
                  onClick={() => navigate(`/product/${item.category_id}/${item.id}/${item.product_url}`, { state: { product: item } })}
                >
                  <div class="w-full flex justify-center mt-[7rem] md:mt-[15rem]">
                    <div class="w-32 md:w-44 h-12 md:h-12 rounded-[100%] relative">
                      <img src={`${process.env.REACT_APP_IMAGE}/all_products/${item.product_image}`}
                        class="h-32 md:h-[8rem] lg:h-48 w-44 object-contain absolute bottom-[20px]" Alt={`${item.product_image}`} />
                    </div>
                  </div>
                  <div class="text-xl md:text-2xl font-semibold mt-5">{item.short_name}</div>
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