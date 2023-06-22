import React from 'react'

const BrandOfDay = () => {
    return (
        <div className="w-full mt-[1rem] flex flex-nowrap flex-col gap-4">
            <div className='w-full  font-bold pl-[6px]'>
                <h1 className='text-bold text-[24px] leading-[40px]'>Category Of The Day</h1>
            </div>
            <div className="max-w-[100%]  py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10" >
                <div class="w-full border rounded-lg">
                    <img class="w-full" src="\\dsav\New folder\ACS Website images\final website images\banner\body-wash.png" alt="" />
                    <div class="p-3 md:p-5 text-lg md:text-2xl text-center text-gray-600 font-semibold">Upto <span class="text-green-600">30% Off</span> on Entire Range</div>
                </div>
                
            </div>
        </div>
    )
}

export default BrandOfDay