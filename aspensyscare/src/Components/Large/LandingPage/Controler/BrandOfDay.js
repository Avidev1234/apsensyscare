import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PregressiveImage from '../../layouts/ImageLoader/PregressiveImage';


const BrandOfDay = () => {
    const Category = useSelector((state) => state.category);
    const { category } = Category.category;
    const navigate = useNavigate();
    const skeletonarray = [1, 2, 3, 4]
    return (
        <div className="w-full mt-[1rem] mb-[30px] flex flex-nowrap flex-col gap-4">
            {!Category.loading && category !== undefined ? (<div className='w-full  font-bold pl-[8px]'>
                <h2 className='text-bold text-2xl md:text-[24px] leading-[40px]'>Category Of The Day</h2>
            </div>) : <Skeleton count={2} />}

            {Category.loading &&
                (<div className='flex justify-between'>
                    {skeletonarray.map((id) => {
                        return (
                            <Skeleton key={id} count={1} className='w-[250px] h-[350px]' />
                        )
                    })}
                </div>
                )
            }
            {!Category.loading && Category.error ? <div>Error: {Category.error}</div> : null}
            <div className="max-w-[100%]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10" >
                {
                    !Category.loading && category !== undefined ? (
                        category.map((item, idx) => {
                            return (
                                <div key={idx.toString()} class="w-full border rounded-lg cursor-pointer" onClick={() => navigate({
                                    pathname: `/category/${item.category_url}/c/${item.id}`,
                                    search: `?categoryId=${item.id}`
                                  })}>
                                    {/* <img class="w-full h-[315px]" src={`${process.env.REACT_APP_IMAGE}/category/${item.category_img}`} alt="" /> */}
                                    <PregressiveImage imgSrc={`${process.env.REACT_APP_IMAGE}/category/${item.category_img}`} previewSrc={`${process.env.REACT_APP_IMAGE}/category/${item.category_img}`} classname={"w-full rounded-t-lg"} Alt={`${item.category_url}`} />
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

export default BrandOfDay