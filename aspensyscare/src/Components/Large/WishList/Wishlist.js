import React, { useEffect } from 'react'
import ProductCard from '../LandingPage/ProductCard/ProductCardold'
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

const ProductByCategory = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    // fatching wishlist product id from wishlist sclice
    const Wishlist = useSelector((state) => state.wishlist);
    const { wishlist } = Wishlist;
    // fatching products regarding category id
    const Products = useSelector((state) => state.product);
    const { product } = Products.products;
    //console.log((wishlist));
    const length = wishlist !== undefined ? wishlist.length : 0
    let temp = 0;
    //console.log(length) 

    const wishListArray = []

    wishlist !== undefined && Products.products.product !== undefined &&
        wishlist.map((items) => {
            product.map((val) => {
                if (items.productId === val.id)
                    wishListArray.push(val)
            })
        })
    //console.log("wishListArray")
    if (!sessionStorage.getItem('___user')) {
        return (
            <div className='w-full flex flex-col flex-wrap min-h-[90vh] items-center justify-center p-5 bg-[#d2efff]'>
                <Helmet>
                    <title>{ }</title>
                    <meta name="description" content={""} />
                </Helmet>
                <div className='w-full lg:w-[40%] flex flex-col items-center justify-center gap-10'>
                    <img src='./Image/Poster/empty-wishlist-ACS2.jpg' alt='' />
                    <button className='px-5 py-1 bg-white border-2 border-[blue]'>Login</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='w-full flex flex-col flex-wrap min-h-[100vh] content-start	justify-start '>
                <Helmet>
                    <title>{ }</title>
                    <meta name="description" content={""} />
                </Helmet>

                <div className='w-full border-2 rounded p-3 font-bold'>
                    <h1 className='text-bold text-xl'>Wishlist</h1>
                </div>

                <div className='w-full flex flex-row flex-wrap content-start justify-start  gap-4'>
                    {wishListArray.length !== 0 ? (
                        wishListArray.map((val, i) => {
                            return (
                                <ProductCard val={val} checked={true} />
                            )
                        })
                    ) :
                        <div className='w-full flex flex-col flex-wrap min-h-[90vh] items-center justify-center bg-[#d2efff]'>
                            <div className='w-full lg:w-[40%] flex flex-col items-center justify-center gap-10'>
                                <img src='./Image/Poster/empty-wishlist-ACS2.jpg' alt='' />
                                <button className='px-5 py-1 bg-white border-2 border-[blue]'>Shop now</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default ProductByCategory