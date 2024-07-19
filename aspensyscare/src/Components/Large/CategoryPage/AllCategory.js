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

                <div className='flex flex-row gap-x-2 justify-start item-start text-[15px] text-[#888787] mb-2 2xl:ml-[25px] xl:ml-[120px] lg:ml-[35px]' >
                    <p className='text-md m-0'>
                    <strong><a href='/' target='_blank' className='hover:text-[#997af6]  text-blue-800 hover:underline'>Home</a>
                        <span>/all-category</span></strong>
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