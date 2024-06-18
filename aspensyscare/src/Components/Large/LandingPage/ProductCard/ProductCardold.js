import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../../Store/Slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../../../../Store/Slices/getwishlistSlice';
import { Log } from '../../../../App';




const ProductCardold = ({ val, page ,checked}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const WishlistproductId = useContext(Log);
    //console.log(WishlistproductId)
    let exsit
    if(WishlistproductId.includes(val.id)){
        exsit=true;
    }

    console.log(val)
    const products = useSelector((state) => state.productdetails);
    const sizedetails = useSelector((state) => state.size);
   
    // destructure all data
    const { details } = products.productdetails;
    const { size } = sizedetails.sizes;


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
            navigate('/wishlist')
        }
        
    }
    return (
        <div className="py-1 max-w-full min-w-full  relative lg:min-w-[420px] h-[210px] md:h-auto lg:min-h-[217px] bg-white">
            {
                page !== "Home" ?
                    <div className="absolute top-3 right-3 group cursor-pointer z-10" onClick={()=>{Wishlist(val,exsit)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:opacity-70 " fill={exsit===true?'#FF983B':"none"}
                            viewBox="0 0 24 24" stroke="#FF983B">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div> : null
            }
            <div className="min-w-[81vw] md:min-w-[44vw] max-w-[92vw] lg:min-w-[400px] h-[210px] lg:h-auto lg:min-h-[217px] flex flex-row bg-white drop-shadow-md rounded-lg overflow-hidden  items-center cursor-pointer"
                onClick={() => navigate(`/product/${val.category_id}/${val.id}/${val.product_url}`, { state: { product: val } })}
            >
                <div className="w-[35%] md:w-1/3 flex justify-center mt-8 md:m-0">
                    <div className="bg-slate-100 w-24 md:w-[7rem] h-24 md:h-[9rem]  relative ">
                        <img src={`${process.env.REACT_APP_IMAGE}/all_products/${val.product_image}`}
                            className="h-28 md:h-[8rem] w-[8rem] object-contain absolute bottom-[10px]" alt="" />
                    </div>
                </div>
                <div className="w-[63%] md:w-2/3 p-2 md:p-3">
                    <h2 className="text-gray-900 font-bold text-base uppercase">{val.brand_name}</h2>
                    <p className="text-gray-600 text-sm md:text-base">{val.name}</p>
                    <h2 className="text-gray-700 font-bold text-base my-2">₹ {val.price}<span className='ml-[5px] text-[12px] text-gray-600'>({val.size_value})ml</span></h2>
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
                        <p className="font-semibold text-gray-400 text-xs ml-1 md:ml-3">(0)</p>
                    </div>

                </div>

            </div>
            <button className=" rounded w-[155px] md:w-[202px] lg:w-[255px] absolute bottom-0 md:bottom-3 right-3 px-3 py-2 bg-[#FF983B] text-white text-[12px] font-semibold hover:bg-green-600 mt-4"
                onClick={() => handleCart(val)}
            >Add to Card</button>
        </div>
    )
}

export default ProductCardold