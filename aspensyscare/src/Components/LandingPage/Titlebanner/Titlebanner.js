import React from 'react'

const Titlebanner = ({category}) => {
    let Img,content;
    if(category==="Home"){
        Img="ACS-Banner3-floor-cleaner.jpg";
        content="Home is where we spend most of our quality time. Apsensys Care’s best home care products help you maintain a hygienic, cheerful, and healthy home."
    }else if(category==="Body"){
        Img="body-wash-banner.jpg";
        content=""
    }else if(category==="Skin"){
        Img="hand-wash-banner.jpg";
        content="With best skincare routine products, Apsensys Care skincare products help you proactively take care of your skin reducing skin problems in the future."
    }else if(category==="Kitchen"){
        Img="Stainpro-Dishwash-Gel-banner.jpg";
        content="It is very important to take the necessary care of your kitchen; Apsensys care has the best kitchen care products in the market for you to keep you and your family safe."
    }
    return (
        <div>
            <div className="flex flex-row items-center w-full h-[180px] md:h-[400px] xl:h-[500px]">
                <div className="flex flex-col justify-center items-center w-[40%] md:w-2/5 xl:w-1/3 bg-[#A9EEC2] h-full px-0 md:px-10">
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