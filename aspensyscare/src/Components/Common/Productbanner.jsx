import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PregressiveImage from '../Small/layouts/ImageLoader/PregressiveImage';

const Productbanner = ({ position, Header }) => {
  const skeletonarray = [1, 2]
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    swipeToSlide: true,
    arrows: false,
    className: Header === true ? "gapgiventoBanner" : "addmargin",
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
          className: 'removegap'
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
  const bannerImagesURL = banner !== undefined && itemIndex !== null ? banner[itemIndex].anchor_link : null
  const bannerImage = bannerImages !== null && bannerImages.split("@@@")
  const bannerURL = bannerImagesURL !== null && bannerImagesURL.split("@@@")

  return (
    <div className="w-full mt-[1rem] flex flex-nowrap flex-col gap-4 max-h-[500px] h-auto lg:h-[500] ">
      {Header === true ? <div className='w-full md:mt-[83px] font-bold pl-[6px]'>
      {!Banner.loading && banner !== undefined ? ( <h1 className='text-[18px] md:text-[24px] leading-[40px] '>Welcome to the Apsensyscare Family</h1>) : <Skeleton count={2} />}
        
      </div> : null}
      {bannerImages===null&&
        (<div className='flex justify-between'>
          {skeletonarray.map((idx) => {
            return (
              <Skeleton key={idx} count={1} className='w-[700px] h-[300px]' />
            )
          })}
        </div>
        )
      }
      {!Banner.loading && Banner.error ? <div>Error: {Banner.error}</div> : null}
      <Slider
        {...settings}
      >
        {
          banner !== undefined ? (
            bannerImage.map((item, idx) => {
              //console.log(item['anchor_link'])
              return (
                <div className='rounded-[10px] cursor-pointer' key={idx} onClick={() => navigate({
                  pathname: `/product/type`,
                  search: `?category_type=${bannerURL[idx].toLowerCase().trim().replace(" ","-",2)}`
                })}>
                  {/* <img className='w-full h-full rounded-[10px] object-contain' src={`${process.env.REACT_APP_IMAGE}/Poster/${item}`} alt='' /> */}
                  <PregressiveImage imgSrc={`${process.env.REACT_APP_IMAGE}/Poster/${item}`} previewSrc={`${process.env.REACT_APP_IMAGE}/Poster/${item}`} classname={'w-full h-full rounded-[10px] object-contain'}  />
                </div>
              )
            }) 
          ) : null
        }
      </Slider>
    </div>
  )
}

export default Productbanner