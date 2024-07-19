import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Smallproct from '../SmallproductCard/Smallproct'

export default function ProductByCategory() {

    const [searchParams] = useSearchParams()
    console.log(searchParams.get('categoryId'))
    // console.log(searchParams)

    const Category = useSelector((state) => state.category);
    const { category } = Category.category;
    const itemIndex = category !== undefined ? category.findIndex((product) => product.id === searchParams.get('categoryId')) : null;
    // console.log(itemIndex);
    const Products = useSelector((state) => state.product);
    const { product } = Products.products;
    let categoryProducts = [];
    product !== undefined && product.map((val, i) => {
        if (val.category_id === searchParams.get('categoryId')) {
            categoryProducts.push(val);
        }
        return true;
    })
    return ( 
        <>
            {
                itemIndex !== null ?
                    (
                        <Helmet>
                            {/* {console.log(category[itemIndex])} */}
                            <meta name="description" content={`${category[itemIndex].category_title}`} />
                            {/* <title>{category[itemIndex].category_title}</title> */}
                        </Helmet>
                    ) : null
            }
            {
                itemIndex !== null ?
                    (
                        <div className='flex flex-row gap-x-2 justify-start item-start text-[#a7a6a6] mb-2'>
                            <p className='text-sm m-0'>
                                <a href='/' target='_blank' className='hover:text-[#997af6] hover:underline'>Home</a>
                                <span>/</span>
                                {category[itemIndex].category_name} 
                            </p>
                        </div>
                    ) : null
            }
            <div className='w-full border-2 rounded p-3 font-bold'>

                {
                    itemIndex !== null ?
                        (
                            <>
                                <h1 className='text-bold text-xl'>{category[itemIndex].category_name}</h1>
                            </>
                        ) : null}
            </div>
            <div>
                <div class="w-auto text-center p-[11px]">
                    <img class="flex mx-auto w-full" src="../src/image/add.png" alt="categorypage-img" />
                </div>
            </div>
            <div className='w-full flex flex-row gap-2 flex-wrap px-2 py-5'>


                {!Products.loading && Products.products.product !== undefined && categoryProducts.length !== 0 ? (
                    categoryProducts.map((val, i) => {
                        return (
                            <Smallproct val={val} key={i} />
                        )
                    })
                ) :
                     <div style={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <p variant='h1' style={{ fontSize: '20px', fontWeight: '600', color: 'red' }}>No Products.</p>
                    </div>
                }
            </div>
        </>
    )
}
