import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PregressiveImage from '../../layouts/ImageLoader/PregressiveImage';

const BestCategory = () => {
  const skeletonarray = [1, 2, 3]
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    arrows: false,
    className: "addmargin",
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
        breakpoint: 920,
        settings: {
          slidesToShow: 3,
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
        }
      }
    ]

  };
  const navigate = useNavigate();
  const Products = useSelector((state) => state.product);
  const { product } = Products.products;
  const Category = useSelector((state) => state.category);
  const { category } = Category.category;
  return (
    <div className="w-full mt-[1rem] mb-[30px] flex flex-nowrap flex-col gap-4">
      {!Category.loading && category !== undefined ? (<div className='w-full  font-bold '>
        <h2 className='text-bold text-[24px] leading-[40px]'>Top Sellers by Category</h2>
      </div>) : <Skeleton count={2} />}

      {Category.loading &&
        (<div className='flex justify-between'>
          {skeletonarray.map((id) => {
            return (
              <Skeleton key={id} count={1} className='w-[350px] h-[350px]' />
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
            category.slice(0, 8).map((item, idx) => {
              const itemIndex = product !== undefined ? product.findIndex((product) => product.id === item.top_product_id) : null;
              // console.log(itemIndex)
              if (itemIndex !== null) {
                return (
                  <div class="border rounded-lg" key={idx}>
                    {/* <img class="rounded-t-lg w-full h-[330px]" src={`${process.env.REACT_APP_IMAGE}/Poster/${item.top_product}`} alt="" /> */}
                    <PregressiveImage imgSrc={`${process.env.REACT_APP_IMAGE}/Poster/${item.top_product}`} previewSrc={`${process.env.REACT_APP_IMAGE}/Poster/${item.top_product}`} classname={"rounded-t-lg w-full "} />
                    <div class="bg-[#CEEDFF] p-4 text-xl text-center font-semibold text-gray-700">{item.category_name}</div>
                    <button class="top-0 left-0 bg-orange-400 text-white py-1 px-3 text-lg rounded-br-lg">Bestsellers</button>
                    <div class="w-full flex justify-center  bg-slate-100 md:h-60">
                      <div class="w-32 md:w-44 h-32 md:h-44  relative ">
                        <img src={`${process.env.REACT_APP_IMAGE}/all_products/${product[itemIndex].product_image}`}
                          class="h-32 md:h-[190px] lg:h-[197px]  md:mb-[-59px] w-44 object-contain absolute bottom-[20px]" alt="poster-img" />
                      </div>
                    </div>
                    <div class="text-gray-700 p-5">
                      <div class="flex items-center p-1 text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg><span class="text-green-600">4.5/5</span>(3475)
                      </div>
                      <p class="font-family:Calibri mt-1 font-bold md:h-[141px] xl:text-lg lg:text-[13px] lg:h-[100px] xl:h-[150px] ">
                        {product[itemIndex].brand_name} <br />
                        <span className='text-[#000000] font-medium'>
                          {product[itemIndex].name.length <= 60 ? product[itemIndex].name : product[itemIndex].name.substr(0, 60) + '...'}
                        </span>
                      </p>

                      <div className=' w-full flex md:gap-2'>
                        <div className=' w-[49%]'>
                          <p class="text-gray-600 my-2">{product[itemIndex].default_size}ml</p>
                          <p class="text-lg font-semibold"><span class="font-bold">₹{product[itemIndex].price}</span>
                            {/* <span class="text-gray-600 mx-2">₹310</span> <span class="text-green-600">20%</span> */}
                          </p>
                        </div>
                        <div className=' w-[48%] '>
                          <button class="bg-orange-400 mt-[2rem] md:py-1 md:px-4 lg:py-2 lg:px-4 text-white rounded-lg w-full flex justify-center   hover:bg-white hover:text-orange-400 border border-orange-400"
                            onClick={() => navigate(`/product/${product[itemIndex].category_id}/${product[itemIndex].id}/${product[itemIndex].product_url}`, { state: { product: product[itemIndex] } })}
                          >Details</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              } else {
                return null
              }
            })
          ) : null
        }


      </Slider>
    </div>
  )
}

export default BestCategory