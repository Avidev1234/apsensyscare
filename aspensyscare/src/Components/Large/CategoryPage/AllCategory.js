import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../LandingPage/ProductCard/ProductCard';

const AllCategory = () => {
    React.useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    const Products = useSelector((state) => state.product);
    const { product } = Products.products;

    return (
        <div className='w-full flex flex-col flex-wrap min-h-[100vh] content-start	justify-start  p-5 '>

            {

                <div className='flex flex-row gap-x-2 justify-start item-start text-[#a7a6a6] mb-2 ' >
                    <p className='text-sm m-0'>
                        <a href='/' target='_blank' className='hover:text-[#997af6] hover:underline'>Home</a>
                        <span>/all-category</span>
                    </p>
                </div>

            }
            <div className='w-full flex justify-center'>
                <div className='w-full flex flex-wrap gap-y-10 justify-center'>
                    {!Products.loading && Products.products.product !== undefined && product.length !== 0 ? (
                        product.map((val, i) => {
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
            </div>
        </div >
    )
}

export default AllCategory