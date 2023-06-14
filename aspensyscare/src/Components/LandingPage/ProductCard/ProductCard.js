import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../Store/Slices/cartSlice';

const ProductCard = ({ val, page }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //console.log(val)
    const products = useSelector((state) => state.productdetails);
    const sizedetails = useSelector((state) => state.size);

    // destructure all data
    const { details } = products.productdetails;
    const { size } = sizedetails.sizes;

    const itemIndex = details !== undefined ? details.findIndex((item) => item.product_id === val.id) : 'null';
    let itemsize = '';

    // if (itemIndex !== -1 && details !== undefined) {
    //     const sizeid = details[itemIndex]['size_id'];
    //     const sizeindex = size !== undefined ? size.findIndex((item) => item.id === sizeid) : 'null';
    //     itemsize = size !== undefined ? size[sizeindex]['size_value'] : null;
    // }


    // handling cart

    const handleCart = (product) => {
        const productDetails = Object.assign({ price: product.default_price }, product);
        dispatch(addToCart([productDetails, product.default_size]));
        navigate('/cart')
    }
    return (
        <div className="py-1 max-w-full min-w-full  relative lg:min-w-[420px] h-[210px] md:h-auto lg:min-h-[217px] bg-white">
            {
                page!=="Home"?
                <div className="absolute top-3 right-3 group cursor-pointer z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:opacity-70 " fill="none"
                        viewBox="0 0 24 24" stroke="#FF983B">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </div>:null
            }
            <div className="min-w-[81vw] md:min-w-[44vw] max-w-[92vw] lg:min-w-[400px] h-[210px] lg:h-auto lg:min-h-[217px] flex flex-row bg-white drop-shadow-md rounded-lg overflow-hidden  items-center cursor-pointer"
                onClick={() => navigate(`/product/${val.category_id}/${val.id}/${val.product_url}`, { state: { product: val } })}
            >
                <div className="w-[35%] md:w-1/3 flex justify-center mt-8 md:m-0">
                    <div className="bg-blue-200 w-24 md:w-[7rem] h-24 md:h-[7rem] rounded-full relative border-b-[4px] ">
                        <img src={`${process.env.REACT_APP_URL}Image/all_products/${val.product_image}`}
                            className="h-28 md:h-[8rem] w-[8rem] object-contain absolute bottom-[10px]" alt="" />
                    </div>
                </div>
                <div className="w-[63%] md:w-2/3 p-2 md:p-3">
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
            <button className=" rounded w-[155px] md:w-[202px] lg:w-[255px] absolute bottom-0 md:bottom-3 right-3 px-3 py-2 bg-[#FF983B] text-white text-[12px] font-semibold hover:bg-green-600 mt-4"
                onClick={() => handleCart(val)}
            >Add to Card</button>
        </div>
    )
}

export default ProductCard