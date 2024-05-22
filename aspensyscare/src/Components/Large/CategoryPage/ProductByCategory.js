import React, { useEffect } from 'react'
import ProductCard from '../LandingPage/ProductCard/ProductCard'
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

const ProductByCategory = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    // localStorage.setItem("cartId", JSON.stringify(value.state.id));
    // const [expanded, setExpanded] = useState(false);
    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    //console.log(categoryId)
    const [searchParams] = useSearchParams()
    // console.log(searchParams.get('categoryId'))

    // console.log(searchParams)
    const Category = useSelector((state) => state.category);
    const { category } = Category.category;
    const itemIndex = category !== undefined ? category.findIndex((product) => product.id === searchParams.get('categoryId')) : null;
    // console.log("itemIndex",itemIndex);
    // fatching products regarding category id
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
        <div className='w-full flex flex-col flex-wrap min-h-[100vh] content-start	justify-start p-5'>
            {
                itemIndex !== null ?
                    (
                        <Helmet>
                            {console.log(category[itemIndex])}
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
            {/* <div className='w-full border-2 rounded p-3 font-bold'>

                {
                    itemIndex !== null ?
                        (
                            <>
                                <h1 className='text-bold text-xl'>{category[itemIndex].category_name}</h1>
                            </>
                        ) : null}
            </div> */}

            <div className='w-full flex flex-row flex-wrap content-start justify-start p-5 gap-4'>
                {!Products.loading && Products.products.product !== undefined && categoryProducts.length !== 0 ? (
                    categoryProducts.map((val, i) => {
                        return (
                            <ProductCard val={val} key={i}/>
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

export default ProductByCategory