import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard';

const ProductVariant = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('category_type'));
    // fatching products regarding category short name
    const Products = useSelector((state) => state.product);
    const { product } = Products.products
    let categoryProducts = [];
    product !== undefined && product.map((val, i) => {
        if (val.short_name.toLowerCase().trim().replace(" ","-",2) === searchParams.get('category_type')) {
            categoryProducts.push(val);
        }
        return true;
    })
    //console.log(categoryProducts);
    return (
        <div className='w-full flex flex-col flex-wrap min-h-[100vh] content-start	justify-start p-5'>
            {/* {
                itemIndex !== null ?
                    (
                        <Helmet>
                            <meta name="description" content={`${category[itemIndex].category_title}`} />
                            <title>{category[itemIndex].category_title}</title>
                        </Helmet>
                    ) : null
            } */}
            <div className='w-full border-2 rounded p-3 font-bold'>

            </div>

            <div className='w-full flex flex-row flex-wrap content-start	justify-start p-5 gap-4'>
                {!Products.loading && Products.products.product !== undefined && categoryProducts.length !== 0 ? (
                    categoryProducts.map((val, i) => {
                        return (
                            <ProductCard val={val} key={i} />
                        )
                    })
                ) :
                    <div style={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <p variant='h1' style={{ fontSize: '20px', fontWeight: '600', color: 'red' }}>No Products.</p>
                    </div>
                }
            </div>
        </div >
    )
}

export default ProductVariant