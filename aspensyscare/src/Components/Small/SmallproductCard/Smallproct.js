import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Log } from '../../../App';
import { addToWishlist, removeFromWishlist } from '../../../Store/Slices/getwishlistSlice';
import PregressiveImage from '../../Small/layouts/ImageLoader/PregressiveImage';

export default function Smallproct({ val, page }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const WishlistproductId = useContext(Log);
    //console.log(WishlistproductId)
    let exsit
    if (WishlistproductId.includes(val.id)) {
        exsit = true;
    }

    //console.log(val)
    const products = useSelector((state) => state.productdetails);
    const sizedetails = useSelector((state) => state.size);

    // destructure all data
    const { details } = products.productdetails;
    const { size } = sizedetails.sizes;

    const itemIndex = details !== undefined ? details.findIndex((item) => item.product_id === val.id) : 'null';
    let itemsize = '';
    const Wishlist = (val, exsit) => {
        if (exsit === true && sessionStorage.getItem('___user')) {
            dispatch(removeFromWishlist(val.id))
        } else if (sessionStorage.getItem('___user')) {
            const wishListData = { 
                productid: val.id,
                userId: sessionStorage.getItem('___user')
            }
            dispatch(addToWishlist(wishListData))
            navigate('/wishlist')
        }
    } 
    return (
        <div class="flex flex-col justify-center w-[48%] sm:w-[32%]">
            <div class="bg-blue-300 rounded-lg relative flex justify-center">
                <PregressiveImage imgSrc={`${process.env.REACT_APP_URL}Image/all_products/${val.product_image}`} previewSrc={`${process.env.REACT_APP_URL}Image/all_products/${val.product_image}`} classname={"w-auto  mx-auto  pt-[30px] pb-[10px]"} />
            </div>
            <div class="w-full flex flex-col">
                <div class="w-[100%] relative ">
                    <div class="absolute w-fit flex flex-row justify-end px-2 top-1 right-0 bg-green-700 rounded-md">
                        <span class="text-white text-[10px] ">4.8</span>
                    </div>
                    <p className="font-bold">{val.brand_name} </p>

                    <p className='text-[#A1A6AD] '>{val.name.substr(0, 15)}...</p>

                </div>
                <p className="text-gray-600">
                    {val.default_size}ml
                </p>
                <h2 className="text-gray-700 font-bold text-base my-2">₹ {val.default_price}.00<span className='ml-[5px] text-[12px] text-gray-600 line-through'>(₹{val.actual_price}.00)</span></h2>
                <button class="bg-yellow-400 rounded-[5px] w-full h-[32px] text-white">Add to Cart</button> 
            </div>
        </div>
    )
}
