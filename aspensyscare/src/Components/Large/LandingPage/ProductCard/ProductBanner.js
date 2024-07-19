import React from 'react'
import ProductCard from './ProductCardold';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../Store/Slices/cartSlice';

const ProductBanner = ({ cat }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Products = useSelector((state) => state.product);
    const { product } = Products.products;
    const Categories = useSelector((state) => state.category);
    const { category } = Categories.category;
    const itemIndex = category !== undefined ? category.findIndex((item) => item.category_url === cat.toLowerCase() + "-care") : null;
    const category_id = itemIndex !== null ? category[itemIndex].id : null;
    let Img;
    if (cat === "Home") {
        Img = "home.jpg";
    } else if (cat === "Body") {
        Img = "body.jpg";
    } else if (cat === "Skin") {
        Img = "skin.png";
    } else if (cat === "Kitchen") {
        Img = "kitchen.png";
    }
    let temp = 1;
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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        arrows: true
    };
    const handleCart = (product) => {
        const productDetails = Object.assign({ price: product.default_price }, product);
        dispatch(addToCart([productDetails, product.default_size]));
        navigate('/cart')
    }
    return (
        <div className='w-full flex flex-col gap-2 border border-red-100'>
            <div>
                <img className="w-full h-[330px] md:h-[355px]" src={`${process.env.REACT_APP_URL}Image/Poster/${Img}`} alt="product-img" />
                <div className="bg-[#5EABE3] p-3 text-center text-white font-semibold text-2xl "></div>
            </div>
            <div className="w-full  md:h-[355px]">
                <Slider className="center"
                    prevArrow={<PreviousBtn />}
                    nextArrow={<NextBtn />}
                    {...settings}>
                    {!Products.loading && Products.products.product !== undefined && category_id !== null ? (
                        product.map((val, i) => {
                            if (val.category_id === category_id && temp <= 3) {
                                temp++;
                                return (
                                    <div className=" max-w-100 relative mt-3 lg:min-w-[370px] lg:min-h-[217px]">
                                        <div className=" lg:min-w-[370px] lg:min-h-[217px] flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden  items-center">
                                            <div className="w-full md:w-1/3 flex justify-center mt-8 md:m-0">
                                                <div className="bg-blue-200 w-28 md:w-[7rem] h-28 md:h-[7rem] rounded-full relative border-b-[4px] ">
                                                    <img src={`${process.env.REACT_APP_URL}Image/all_products/${val.product_image}`}
                                                        className="h-28 md:h-[7rem] w-[7rem] object-contain absolute bottom-[20px]" alt="product-img" />
                                                </div>
                                            </div>
                                            <div className="w-full md:w-2/3 p-2 md:p-3">
                                                <h2 className="text-gray-900 font-bold text-base uppercase">{val.brand_name}</h2>
                                                <p className="text-gray-600 text-sm md:text-base">{val.name}</p>
                                                <h2 className="text-gray-700 font-bold text-base my-2">₹ {val.default_price}<span className='ml-[5px] text-[12px] text-gray-600'>({val.default_size})ml</span></h2>
                                                <div className="flex items-center">
                                                    <div className="flex items-center text-xs bg-green-600 text-white font-semibold px-2.5 py-0.5 rounded w-auto md:w-[20%]">
                                                        <span>4.0</span>
                                                        <svg className="w-4 h-4 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                    <p className="font-semibold text-gray-400 text-xs ml-1 md:ml-3">(45556)</p>
                                                </div>

                                            </div>

                                        </div>
                                        <button className=" rounded w-[130px] md:w-[230px] absolute bottom-0 md:bottom-3 right-3 px-3 py-2 bg-[#FF983B] text-white text-[12px] font-semibold hover:bg-green-600 mt-4"
                                            onClick={() => handleCart(val)}
                                        >Add to Card</button>
                                    </div>
                                )
                            }
                            return null;
                        })
                    ) : null}
                </Slider>
            </div >

        </div >
    )
}

export default ProductBanner