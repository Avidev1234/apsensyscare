import React from 'react'
import { useNavigate } from 'react-router-dom';

import "./category.css"
import { useSelector } from 'react-redux';

const ProductCategory = () => {
    const navigate = useNavigate();
    const Category = useSelector((state) => state.category);
    const { category } = Category.category;
    return (
        <>
            <div className='w-full flex flex-col mt-3'>
                <div className='w-full flex h-[70px] text-center text-black text-bold bg-color'>
                    <h1 className='m-auto'>Taking Care of your self doesn’t have to feel like a Routine</h1>
                </div>
                <div className="flex flex-wrap justify-around content-center items-center py-20 gap-y-8 lg:gap-3">
                    {!Category.loading && Category.category.category !== undefined ? (
                        category.map((val, i) => {
                            return (
                                <div className="h-[180px] md:h-[300px] imageContainer flex flex-col flex-nowrap gap-2 lg:gap-3 cursor-pointer" onClick={() => navigate(`/category/${val.category_url}`, { state: { id: val.id,val:val } })}>
                                    <img className="w-[130px] md:w-[250px] h-[130px] md:h-[250px] object-cover"
                                        src={`${process.env.REACT_APP_URL}Image/category/${val.category_img}`} alt="" />
                                    <h3 className="mt-0 lg:mt-3 w-full text-center font-bold text-[16px] absolute bottom-0 mx-auto">{val.category_name}</h3>
                                </div>
                            )
                        }
                        )
                    ) : null}

                </div>

            </div>
        </>
    )
}

export default ProductCategory
