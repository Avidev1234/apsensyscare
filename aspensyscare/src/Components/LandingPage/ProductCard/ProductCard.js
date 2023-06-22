import React, { useContext } from 'react'
import { addToCart } from '../../../Store/Slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../../../Store/Slices/getwishlistSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Log } from '../../../App';

const ProductCard = ({ val }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const WishlistproductId = useContext(Log);
    console.log(WishlistproductId)
    let exsit
    if(WishlistproductId.includes(val.id)){
        exsit=true;
    }

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
        // destructure all data
        
        // get the all details belongs to product Id from product entry tables
        const itemIndex = details !== undefined ? details.filter((item) => item.product_id === product.id) : [];
        let itemsize = '';
        const Productvariants = [];
        //console.log(itemIndex);
        if (itemIndex.length !== 0 && details !== undefined && size !== undefined) {
            itemIndex.map((item, idx) => {
                const index = size.filter((items) => items.id === item.size_id)
                const values = {
                    "price": item.price,
                    "size": index[0]['size_value']
                }
                Productvariants.push(values)
            })
            const productDetails = Object.assign({ price: product.default_price }, product);
            dispatch(addToCart([productDetails, product.default_size,Productvariants]));
            navigate('/cart')
        }
    }
    const Wishlist=(val,exsit)=>{
        if(exsit === true && sessionStorage.getItem('___user')){
            dispatch(removeFromWishlist(val.id))
        }else if(sessionStorage.getItem('___user')){
            const wishListData={
                productid:val.id,
                userId:sessionStorage.getItem('___user')
              }
            dispatch(addToWishlist(wishListData))
        }
        
    }
    return (
        <div>
            <div class="w-full md:max-w-[200px] shrink ">
                <div class="border rounded-lg relative">
                    <button class="absolute right-0 bg-orange-400 text-white px-1 text-sm rounded-tr-lg">Best sellers</button>
                    <img width="150" height="200" class="mx-auto pt-[30px]" src={`${process.env.REACT_APP_URL}Image/all_products/${val.product_image}`}alt="" />
                    <div class="flex items-center p-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg><span class="text-green-600">4.5/5</span>(3475)</div>
                </div>
                <div class="text-gray-700">
                    <p class="mt-1 font-bold h-[40px]">{val.brand_name} - <span className='text-[#A1A6AD]'>{val.name.substr(0,15)}...</span></p>
                    <p class="text-gray-600 my-2">500ml</p>
                    <p class="text-lg font-semibold"><span class="font-bold">₹{val.default_price}</span>
                    {/* <span class="text-gray-600 mx-2">₹{val.default_price}</span> <span class="text-green-600">20%</span> */}
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default ProductCard