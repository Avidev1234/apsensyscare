import React from 'react'
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const Titlebanner = ({ category }) => {
    let Img1, Img2, Img3, content;
    if (category === "Home") {
        Img1 = "ACS-Banner3-floor-cleaner.jpg";
        Img2 = "ACS-Banner3-floor-cleaner.jpg";
        Img3 = "ACS-Banner3-floor-cleaner.jpg";
        content = "Want us to help you maintain a hygienic, cheerful, and healthy home?"
    } else if (category === "Body") {
        Img1 = "body-wash-banner.jpg";
        Img2 = "body-wash-banner.jpg";
        Img3 = "body-wash-banner.jpg";
        content = "Beautiful inside out. Gift your body best care products it deserves."
    } else if (category === "Skin") {
        Img1 = "hand-wash-banner.jpg";
        Img2 = "hand-wash-banner.jpg";
        Img3 = "hand-wash-banner.jpg";
        content = "Pamper your skin. Say no to skin problems and yes to healthy and glowing skin."
    } else if (category === "Kitchen") {
        Img1 = "Stainpro-Dishwash-Gel-banner.jpg";
        Img2 = "Stainpro-Dishwash-Gel-banner.jpg";
        Img3 = "Stainpro-Dishwash-Gel-banner.jpg";
        content = "For a spotless kitchen. All kitchen care products under one roof."
    }
    const PreviousBtn = (props) => {
        // console.log(props);
        const { onClick } = props;
        return (
            <div className="slick-prev w-auto p-2 py-8 bg-white hover:bg-white hover:p-5	" onClick={onClick}>
                <ArrowBackIos style={{ color: "#d9d9d9", fontSize: "30px" }} />
            </div>
        );
    };
    const NextBtn = (props) => {
        const { onClick } = props;
        return (
            <div className="slick-next w-auto p-2 py-8 bg-white hover:bg-white hover:p-5	" onClick={onClick}>
                <ArrowForwardIos style={{ color: "#d9d9d9", fontSize: "30px" }} />
            </div>
        );
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        arrows: true
    };
    const banners = useSelector((state) => state.banner);
    const { banner } = banners.banner;

    const itemIndex = banner !== undefined ? banner.findIndex((item) => item.category === category) : null;
    const bannerImages = banner !== undefined && itemIndex !== null ? banner[itemIndex].banner_image : null
    console.log(bannerImages);
    const bannerImage = bannerImages !== null && bannerImages.split("@@@")
    return (
        <div>
            <div className="flex flex-row items-center w-full h-[180px] md:h-[400px] xl:h-[470px]">
                <div className="flex flex-col justify-center items-center w-[40%] md:w-2/5 xl:w-1/3 bg-[#BEE7FF] h-full px-0 md:px-10">
                    <h1 className="text-[14px] md:text-[30px] font-bold">{category} Care</h1>
                    <p className="text-[10px] md:text-[20px] text-center">{content}</p>
                </div>
                <div className="w-[60%] md:w-3/5 xl:w-2/3 h-full">
                    <Slider className="center"
                        prevArrow={<PreviousBtn />}
                        nextArrow={<NextBtn />}
                        {...settings}>
                        {
                            bannerImages !== null && bannerImage.map((items) => {
                                return (
                                    <img className="w-full h-[180px] md:h-[400px] xl:h-[470px] mx-auto" src={`./Image/Poster/${items}`} alt="" />
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Titlebanner