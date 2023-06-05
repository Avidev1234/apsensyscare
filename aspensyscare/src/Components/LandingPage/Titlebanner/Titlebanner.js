import React from 'react'

const Titlebanner = ({category}) => {
    let Img,content;
    if(category==="Home"){
        Img="ACS-Banner3-floor-cleaner.jpg";
        content="Want us to help you maintain a hygienic, cheerful, and healthy home?"
    }else if(category==="Body"){
        Img="body-wash-banner.jpg";
        content="Beautiful inside out. Gift your body best care products it deserves."
    }else if(category==="Skin"){
        Img="hand-wash-banner.jpg";
        content="Pamper your skin. Say no to skin problems and yes to healthy and glowing skin."
    }else if(category==="Kitchen"){
        Img="Stainpro-Dishwash-Gel-banner.jpg";
        content="For a spotless kitchen. All kitchen care products under one roof."
    }
    return (
        <div>
            <div className="flex flex-row items-center w-full h-[180px] md:h-[400px] xl:h-[470px]">
                <div className="flex flex-col justify-center items-center w-[40%] md:w-2/5 xl:w-1/3 bg-[#BEE7FF] h-full px-0 md:px-10">
                    <h1 className="text-[14px] md:text-[30px] font-bold">{category} Care</h1>
                    <p className="text-[10px] md:text-[20px] text-center">{content}</p>
                </div>
                <div className="w-[60%] md:w-3/5 xl:w-2/3 h-full">
                    <img className="w-full h-[100%] mx-auto" src={`./Image/Poster/${Img}`} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Titlebanner