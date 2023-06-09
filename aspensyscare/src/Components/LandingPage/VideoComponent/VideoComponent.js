import React from 'react'
import "./videocomponent.css"
import { useNavigate } from 'react-router-dom';
const VideoComponent = () => {
    const navigate = useNavigate();

    return (
        <div class="w-full h-[230px] md:h-[450px] flex items-center justify-center gap-[18px] md:gap-0">
            <div class="w-[35%] flex items-center justify-center">
                <div class="text-start sm:text-center">
                    <h2 class="text-sm md:text-[26px] mb-2">Well-being Enhanced</h2>
                    <p class="hidden sm:block text-[18px] mb-1">
                        Indulge in self-care and treat yourself with finest ingredients
                    </p>
                    <p class="text-[12px] sm:text-[18px] mb-3 sm:mb-10">
                    Get strong, active, rejuvenating care with every use.
                    </p>
                    <button onClick={()=>navigate("/products")}
                        class="bg-[#FF983B] px-4 md:px-10 py-2 md:py-3 text-sm md:text-base text-white border-2 border-[#FF983B] hover:bg-white hover:text-[#FF983B]">Shop
                        Now</button>
                </div>
            </div>
            <div class=" w-[60%] md:w-[60%] p-5 h-full relative flex items-center justify-end">
                <div class="w-auto video absolute right-0 top-10">
                    <video controls loop autoPlay class="h-[120px] md:h-[350px] w-[100%] object-cover"
                        src={`https://res.cloudinary.com/dvzerjzmg/video/upload/v1686123365/video_zzyd1w.mp4`}>
                    </video>
                </div>
            </div>
        </div>
    )
}

export default VideoComponent