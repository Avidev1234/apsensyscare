import React from 'react'
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PregressiveImage from '../../layouts/ImageLoader/PregressiveImage';
import { useNavigate } from 'react-router-dom';

   

    export default function Smallbrandoffer({ title }) {
        const navigate = useNavigate();
        const skeletonarray = [1, 2, 3]
    
        const Brand = useSelector((state) => state.Brand);
        const { brands } = Brand.brands;
        return (
            <div className="w-full mt-[1rem] mb-[30px] flex flex-nowrap flex-col gap-4  rounded-lg">
                {!Brand.loading && brands !== undefined ? (<div className='w-full  font-bold  my-[30px]'>
                    <h2 className='text-bold text-2xl md:text-[24px] leading-[40px]'>{title}</h2>
                </div>) : <Skeleton count={2} />}

                {Brand.loading &&
                    (<div className='flex justify-between'>
                        {skeletonarray.map((id) => {
                            return (
                                <Skeleton count={1} key={id} className='w-[350px] h-[350px]' />
                            )
                        })}
                    </div>
                    )
                }
                {!Brand.loading && Brand.error ? <div>Error: {Brand.error}</div> : null}
                <div className="max-w-[100%]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10" >
                    {
                        !Brand.loading && brands !== undefined ? (
                            brands.map((item, idx) => {
                                return (
                                    <div key={idx} class="w-full border rounded-lg cursor-pointer" onClick={() => {
                                        title === "Top Brands" ?
                                        navigate({
                                            pathname: `/product/type`,
                                            search: `?category_type=${item.top_brand_link.toLowerCase().trim().replace(" ", "-", 2)}`
                                        })
                                        :
                                        navigate({
                                            pathname: `/product/type`,
                                            search: `?category_type=${item.featured_brand_link.toLowerCase().trim().replace(" ", "-", 2)}`
                                        })
                                    }}>
                                        {title === "Top Brands" ? (
                                            // <img class="w-full h-[235px] rounded-t-lg" src={`${process.env.REACT_APP_URL}Image/Poster/${item.top_brand}`} alt="" />
                                            <PregressiveImage imgSrc={`${process.env.REACT_APP_URL}Image/Poster/${item.top_brand}`} previewSrc={`${process.env.REACT_APP_URL}Image/Poster/${item.top_brand}`} classname={"w-full h-[235px] rounded-t-lg"} />
                                        ) :
                                            // <img class="w-full h-[235px] rounded-t-lg" src={`${process.env.REACT_APP_URL}Image/Poster/${item.featured_brand}`} alt="" />
                                            <PregressiveImage imgSrc={`${process.env.REACT_APP_URL}Image/Poster/${item.featured_brand}`} previewSrc={`${process.env.REACT_APP_URL}Image/Poster/${item.featured_brand}`} classname={"w-full h-[235px] rounded-t-lg"} />

                                        }

                                        <div class="p-3 md:p-5 text-lg md:text-2xl text-center text-gray-600 font-semibold">Upto <span class="text-green-600">30% Off</span> on Entire Range</div>
                                    </div>
                                )
                            })
                        ) : null
                    }
                </div>
            </div>
        )
    }
