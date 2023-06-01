import React from 'react'
import Titlebanner from '../Titlebanner/Titlebanner'
import ProductCard from '../ProductCard/ProductCard'
import ProductBanner from '../ProductCard/ProductBanner'
import { useSelector } from 'react-redux'

const CategoryControler = ({category}) => {
    const Products = useSelector((state) => state.product);
    const { product } = Products.products;
    let temp = 1;
    let cat;
    if(category==="Home"){
        cat="1";
    }else if(category==="Skin"){
        cat="5";
    }else if(category==="Body"){
        cat="7";
    }else if(category==="Kitchen"){
        cat="2";
    }
    return (
        <div className='w-full flex flex-col'>
            <Titlebanner category={category}/>
            <div className='w-full text-center'>
                <p className='text-[24px] font-bold my-4'>Top sellers from {category} Care</p>
            </div>
            <div className='w-full flex flex-col lg:flex-row'>
                <div className='w-full lg:w-[65%] flex flex-row flex-wrap gap-x-8 gap-y-0  justify-start items-center content-start pl-6 '>
                    {!Products.loading && Products.products.product !== undefined ? (
                        product.map((val, i) => {
                            if (val.category_id === cat && temp <= 6) {
                                temp++;
                                return (
                                    <ProductCard val={val}/>
                                )
                            }
                            return null;
                        })
                    ) : null}
                </div>
                <div className='w-full md:w-[35%] flex flex-col  gap-x-8 gap-y-0  justify-start items-center px-6 mt-1'>
                    <ProductBanner category={category}/>
                </div>
            </div>

        </div>
    )
}

export default CategoryControler