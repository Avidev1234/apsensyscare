import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../LandingPage/ProductCard/ProductCard';

const AllPopularProducts = () => {
    const Products = useSelector((state) => state.product);
    const { product } = Products.products;
    return (
        <>
            <div className='w-full flex flex-col lg:flex-row justify-start items-center content-start p-10'>
                <div className='w-full flex flex-row flex-wrap gap-x-8 gap-y-0  justify-start items-center content-start  '>
                    {!Products.loading && Products.products.product !== undefined ? (
                        product.map((val, i) => {

                            return (
                                <ProductCard val={val} />
                            )

                        })
                    ) : null}
                </div>
            </div>

        </>
    )
}

export default AllPopularProducts