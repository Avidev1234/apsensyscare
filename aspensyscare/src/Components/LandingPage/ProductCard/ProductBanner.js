import React from 'react'

const ProductBanner = ({ category }) => {
    let Img, content;
    if (category === "Home") {
        Img = "home.jpg";
    } else if (category === "Body") {
        Img = "body.jpg";
    } else if (category === "Skin") {
        Img = "skin.png";
    } else if (category === "Kitchen") {
        Img = "kitchen.png";
    }
    return (
        <div className='flex flex-col gap-2'>
            <div>
                <img class="w-full h-[330px] md:h-[355px]" src={`${process.env}/Image/Poster/${Img}`} alt="" />
                <div class="bg-[#F38181] p-3 text-center text-white font-semibold text-2xl ">Best Seller</div>
            </div>
            <div>
                <div class="py-6 max-w-100 relative mt-3 lg:min-w-[400px] lg:min-h-[217px]">
                    <div class="absolute right-2 group cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 group-hover:opacity-70" fill="none"
                            viewBox="0 0 24 24" stroke="gray">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <div class=" lg:min-w-[400px] lg:min-h-[217px] flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden  items-center">
                        <div class="w-full md:w-1/3 flex justify-center mt-8 md:m-0">
                            <div class="bg-blue-200 w-28 md:w-36 h-28 md:h-36 rounded-full relative">
                                <img src="https://apsensyscare.com/Image/all_products/nexpro-citrus-floor-cleaner.png"
                                    class="h-28 md:h-36 w-36 object-contain absolute bottom-[20px]" alt="" />
                            </div>
                        </div>
                        <div class="w-full md:w-2/3 p-2 md:p-3">
                            <h1 class="text-gray-900 font-bold text-base uppercase">NEXPRO</h1>
                            <p class="text-gray-600 text-sm md:text-base">Glass and Multi-surface cleaner</p>
                            <h1 class="text-gray-700 font-bold text-base my-2">₹ 220</h1>
                            <div class="flex items-center">
                                <div class="flex items-center text-xs bg-green-600 text-white font-semibold px-2.5 py-0.5 rounded w-auto md:w-[20%]">
                                    <span>5.0</span>
                                    <svg class="w-4 h-4 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <p class="font-semibold text-gray-400 text-xs ml-1 md:ml-3">(45556)</p>
                            </div>
                            <button class="px-3 py-2 bg-[#F38181] w-full text-white text-[12px] font-semibold hover:bg-[#E34343] mt-4">Add to Card</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductBanner