import React from 'react'

export default function Wishlist() {
  return (
    <div>
         
            <hr />
            <div className="flex flex-col  sm:h-[210px]">
                <div className="flex flex-col items-center">
                    <div className="w-full flex justify-between gap-x-[10px] p-[10px]">
                        <div className="w-full flex items-center gap-x-[10px]">
                            <div className="flex bg-blue-300 h-[110px] w-[110px] sm:w-[140px] sm:h-[140px] mr-[10px]">
                                <img src="../src/image/soap.png" alt="" />
                            </div>
                            <div>
                                <p className="text-blue-700 text-[14px] sm:text-[20px] font-bold not-italic">
                                    Delivered on 18/08/2023
                                </p>
                                <p className="font-medium text-[14px] sm:text-[20px]">
                                    Yellow Hand Wash
                                    <br />
                                    <span className="text-[12px] not-italic font-normal relative bottom-1 sm:text-[14px]">Organic lemon hand wash</span>
                                </p>
                                <p className="text-[11px] sm:text-[14px] flex-row relative bottom-0 font-thin">Rate this product now</p>
                                <span className="flex flex-row relative bottom-0 float-left gap-2">
                                    <img src="../src/image/Star.png" alt="" />
                                    <img src="../src/image/Star.png" alt="" />
                                    <img src="../src/image/Star.png" alt="" />
                                    <img src="../src/image/Star.png" alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="float-right pt-[59px] pr-[4px]">
                            <img src="../src/image/arrow.png" alt="" />
                        </div>
                    </div>
                    <button className="w-max bg-sky-500 hover:bg-sky-700 text-[16px] p-[5px] text-white rounded">Order Details</button>
                </div>
                <hr />
            </div>
        </div>
  )
}
