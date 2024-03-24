import React, { useEffect } from 'react'

const Jobs = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      })
    return (
        <div>
            <div class="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center px-5 mb-4"
                style={{backgroundImage:"url('https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500')"}}>
                <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

                <div class="z-50 flex flex-col justify-center text-white w-full h-screen">
                    <h1 class="text-5xl"><b>Coming</b> Soon!</h1>
                    <div class="mt-10 mb-5">
                        <div class="shadow w-full bg-white mt-2 max-w-2xl mx-auto">
                            <div class="bg-indigo-600 text-sm leading-none text-center font-semibold text-white py-2"
                                style={{width: "75%"}}>75%</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Jobs