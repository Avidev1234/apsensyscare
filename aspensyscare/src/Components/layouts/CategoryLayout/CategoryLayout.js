import React from 'react'
import { useSelector } from 'react-redux';

const CategoryLayout = () => {
  const Category = useSelector((state) => state.category);
  const { category } = Category.category;
  return (
    <div className='w-full flex flex-row flex-nowrap justify-center items-center bg-[#0112FE] h-[50px] '>
      <div className='w-full lg:w-[1440px] flex flex-row flex-nowrap justify-around  items-center bg-[#0112FE] h-[50px]'>
      <h2 className='text-[8px] md:text-[14px] text-white uppercase font-bold cursor-pointer hover:text-[#E34343]'>Home</h2>
        {!Category.loading && Category.category.category !== undefined ? (
          category.map((val, i) => {
            return (
              <h2 className='text-[8px] md:text-[14px] text-white uppercase font-bold cursor-pointer hover:text-[#E34343]'>{val.category_name}</h2>
            )
          }
          )
        ) : null}
      </div>

    </div>
  )
  
}

export default CategoryLayout