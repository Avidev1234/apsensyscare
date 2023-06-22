import React, { useEffect, useState } from 'react'
import ProductCard from '../LandingPage/ProductCard/ProductCardold'
import { useLocation } from 'react-router-dom';
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
    console.log((wishlist));
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
    console.log(wishListArray)

    return (
        <div className='w-full flex flex-col flex-wrap min-h-[100vh] content-start	justify-start p-5'>
            <Helmet>
                <title>{ }</title>
                <meta name="description" content={""} />
            </Helmet>
            <div className='w-full border-2 rounded p-3 font-bold'>
                <h1 className='text-bold text-xl'>Wishlist</h1>
            </div>

            <div className='w-full flex flex-row flex-wrap content-start justify-start p-5 gap-4'>
                {!wishListArray.length !== 0 ? (
                    wishListArray.map((val, i) => {
                        return (
                            <ProductCard val={val} checked={true} />
                        )
                    })
                ) :
                    <div style={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <p variant='h1' style={{ fontSize: '20px', fontWeight: '600', color: 'red' }}>No Products.</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProductByCategory