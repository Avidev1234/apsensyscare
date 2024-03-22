import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function Category() {
    const Category = useSelector((state) => state.category);
    const { category } = Category.category;
    const navigate = useNavigate();
    console.log(category);
    return (

        <div className="w-full flex flex-row justify-around ">
            {category !== undefined ? category.map((item, idx) => {
                return (
                    <div className="w-[20%] h-[80px] p-1 rounded-[2px] m-[12px] pt-[2px] md:w-[25%] ml-[5px]"
                        onClick={() => {
                            navigate({
                                pathname: `/category/${item.category_url}/c/${item.id}`,
                                search: `?categoryId=${item.id}`
                            })
                        }
                        }
                    >
                        <div className="w-[100%]">
                            <img className='items-center rounded-md' src={`https://apsensyscare.com/Image/category/${item.category_img}`} alt="" />
                        </div>
                        <span className="flex justify-center text-black text-[9px] mt-1 sm:text-[10px] md:text-[15px]">{item.category_name}</span>
                    </div>
                )
            }) : null}


        </div>
    )
}
