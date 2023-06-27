import React from 'react'
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BrandsOffer = ({ title }) => {
    const skeletonarray = [1, 2, 3]
    const Brand = useSelector((state) => state.Brand);
    const { brands } = Brand.brands;
    return (
        <div className="w-full mt-[1rem] mb-[30px] flex flex-nowrap flex-col gap-4  rounded-lg">
            <div className='w-full  font-bold  my-[30px]'>
                <h1 className='text-bold text-2xl md:text-[24px] leading-[40px]'>{title}</h1>
            </div>
            {Brand.loading &&
                (<div className='flex justify-between'>
                    {skeletonarray.map(() => {
                        return (
                            <Skeleton count={1} className='w-[350px] h-[350px]' />
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
                                <div class="w-full border rounded-lg">
                                    {title === "Top Brands" ? (<img class="w-full rounded-t-lg" src={`${process.env.REACT_APP_URL}Image/Poster/${item.top_brand}`} alt="" />) : <img class="w-full rounded-t-lg" src={`${process.env.REACT_APP_URL}Image/Poster/${item.featured_brand}`} alt="" />

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

export default BrandsOffer