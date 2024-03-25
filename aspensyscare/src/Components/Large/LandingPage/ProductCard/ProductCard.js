import React, { useContext } from 'react'
import { addToWishlist, removeFromWishlist } from '../../../../Store/Slices/getwishlistSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Log } from '../../../../App';
import PregressiveImage from '../../layouts/ImageLoader/PregressiveImage';

const ProductCard = ({ val, page }) => {
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

    // if (itemIndex !== -1 && details !== undefined) {
    //     const sizeid = details[itemIndex]['size_id'];
    //     const sizeindex = size !== undefined ? size.findIndex((item) => item.id === sizeid) : 'null';
    //     itemsize = size !== undefined ? size[sizeindex]['size_value'] : null;
    // }

    // handling cart

    // const handleCart = (product) => {
    //     // destructure all data

    //     // get the all details belongs to product Id from product entry tables
    //     const itemIndex = details !== undefined ? details.filter((item) => item.product_id === product.id) : [];
    //     let itemsize = '';
    //     const Productvariants = [];
    //     //console.log(itemIndex);
    //     if (itemIndex.length !== 0 && details !== undefined && size !== undefined) {
    //         itemIndex.map((item, idx) => {
    //             const index = size.filter((items) => items.id === item.size_id)
    //             const values = {
    //                 "price": item.price,
    //                 "size": index[0]['size_value']
    //             }
    //             Productvariants.push(values)
    //         })
    //         const productDetails = Object.assign({ price: product.default_price }, product);
    //         dispatch(addToCart([productDetails, product.default_size, Productvariants]));
    //         navigate('/cart')
    //     }
    // }
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
        <div className="max-w-[200px] shrink cursor-pointer"
        >
            <div className=" rounded-lg relative">
                <button className="absolute left-0 bg-orange-400 text-white px-2 py-1 text-sm rounded-tl-lg z-10">Best sellers</button>
                {
                    page === "re" ?
                        <div className="absolute top-0 right-1 group cursor-pointer z-10" onClick={() => { Wishlist(val, exsit) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:opacity-70 " fill={exsit === true ? '#FF983B' : "none"}
                                viewBox="0 0 24 24" stroke="#FF983B">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div> : null
                }
            </div>
            <div className="border rounded-lg relative flex justify-center px-[20px]" onClick={() => navigate(`/product/${val.category_id}/${val.id}/${val.product_url}`)}>
                {/* <img width="150" height="200" className="mx-auto pt-[30px] pb-[10px]" src={`${process.env.REACT_APP_URL}Image/all_products/${val.product_image}`} alt="" /> */}
                <PregressiveImage imgSrc={`${process.env.REACT_APP_URL}Image/all_products/${val.product_image}`} previewSrc={`${process.env.REACT_APP_URL}Image/all_products/${val.product_image}`} classname={"w-[150px] h-[240px] mx-auto pt-[30px] pb-[10px]"} />
            </div>
            <div className="text-gray-700" onClick={() => navigate(`/product/${val.category_id}/${val.id}/${val.product_url}`)}>
                <p className="mt-1 font-bold h-[45px]">{val.brand_name} <br /> <span className='text-[#A1A6AD] '>{val.name.substr(0, 20)}...</span></p>
                <div className='w-full flex flex-row flex-nowrap justify-between'>
                    <p className="text-gray-600 my-2">
                        {val.default_size}ml
                    </p>
                    <div className="flex items-center p-1 text-[12px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-star-fill h-3 w-4 text-green-600" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <span className="text-green-600">4.5/5</span><span>(3475)</span>
                    </div>
                </div>

                <p className="text-lg font-semibold"><span className="font-bold">₹{val.default_price}</span>
                    <span className="text-gray-600 mx-2">₹{val.default_price}</span> <span className="text-green-600">20%</span>
                </p>
            </div>
        </div>
    )
}

export default ProductCard